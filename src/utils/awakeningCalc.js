const REQUIRED = {
  xp: 350,
  gp: 1500,
  gp2: 600,
  gp3: 200,
  shadow0: 0,
  shadow1: 45,
  shadow2: 20,
  shadow3: 8,
  lattice: 12,
};

// Returns deficit and surplus arrays for a tier chain.
// All math uses integer division (Math.floor). No floating point.
function splitChain(haveArr, reqArr) {
  return {
    surplus: haveArr.map((h, i) => Math.max(0, h - reqArr[i])),
    deficit: reqArr.map((r, i) => Math.max(0, r - haveArr[i])),
  };
}

// Applies a single upward conversion: surplus[fromIdx] → deficit[fromIdx+1] at ratio:1.
function applyStep(surplus, deficit, fromIdx, ratio, fromLabel, toLabel, out) {
  if (deficit[fromIdx + 1] <= 0 || surplus[fromIdx] <= 0) return;
  const convert = Math.min(Math.floor(surplus[fromIdx] / ratio), deficit[fromIdx + 1]);
  if (convert <= 0) return;
  surplus[fromIdx] -= convert * ratio;
  deficit[fromIdx + 1] -= convert;
  out.push(`${convert * ratio} ${fromLabel} → ${convert} ${toLabel}`);
}

// Applies a multi-level upward conversion: surplus[fromIdx] → deficit[toIdx] at ratio:1.
function applyMulti(surplus, deficit, fromIdx, toIdx, ratio, fromLabel, toLabel, note, out) {
  if (deficit[toIdx] <= 0 || surplus[fromIdx] <= 0) return;
  const convert = Math.min(Math.floor(surplus[fromIdx] / ratio), deficit[toIdx]);
  if (convert <= 0) return;
  surplus[fromIdx] -= convert * ratio;
  deficit[toIdx] -= convert;
  out.push(note ? `${convert * ratio} ${fromLabel} → ${convert} ${toLabel} (${note})` : `${convert * ratio} ${fromLabel} → ${convert} ${toLabel}`);
}

/**
 * Calculates remaining materials needed for a full awakening.
 *
 * Conversion rules (upward only):
 *   GP chain:     5 GP = 1 GP 2,  5 GP 2 = 1 GP 3
 *   Shadow chain: 3 Shadow 0 = 1 Shadow 1,  4 Shadow 1 = 1 Shadow 2,  5 Shadow 2 = 1 Shadow 3
 *   Lattice and XP: no conversion.
 *
 * Strategy: satisfy each tier's own requirement first, then cascade any
 * surplus upward to cover deficits in higher tiers.
 *
 * @param {Object} inputs  - keyed by material name, values are strings or numbers
 * @returns {{ complete: boolean, needed: Array, conversions: string[] }}
 */
export function calculateAwakeningNeeds(inputs) {
  const get = (key) => Math.max(0, Math.floor(Number(inputs[key]) || 0));

  const xp      = get('xp');
  const gp      = get('gp');
  const gp2     = get('gp2');
  const gp3     = get('gp3');
  const shadow0 = get('shadow0');
  const shadow1 = get('shadow1');
  const shadow2 = get('shadow2');
  const shadow3 = get('shadow3');
  const lattice = get('lattice');

  const conversions = [];

  // XP and Lattice: direct only
  const needXp      = Math.max(0, REQUIRED.xp - xp);
  const needLattice = Math.max(0, REQUIRED.lattice - lattice);

  // --- GP chain (gp < gp2 < gp3) ---
  const gp_ = splitChain([gp, gp2, gp3], [REQUIRED.gp, REQUIRED.gp2, REQUIRED.gp3]);
  const gpS = gp_.surplus;
  const gpD = gp_.deficit;

  applyStep(gpS, gpD, 0, 5, 'GP', 'GP 2', conversions);        // gp → gp2  (5:1)
  applyStep(gpS, gpD, 1, 5, 'GP 2', 'GP 3', conversions);      // gp2 → gp3 (5:1)
  applyMulti(gpS, gpD, 0, 2, 25, 'GP', 'GP 3', 'via GP 2', conversions); // gp → gp3 (25:1)

  // --- Shadow chain (s0 < s1 < s2 < s3) ---
  // Ratios: 3 blue = 1 purple, 4 purple = 1 yellow, 5 yellow = 1 red
  const sh_ = splitChain(
    [shadow0, shadow1, shadow2, shadow3],
    [REQUIRED.shadow0, REQUIRED.shadow1, REQUIRED.shadow2, REQUIRED.shadow3],
  );
  const shS = sh_.surplus;
  const shD = sh_.deficit;

  applyStep(shS, shD, 0, 3,  'Shadow 0', 'Shadow 1', conversions);  // s0 → s1 (3:1)
  applyStep(shS, shD, 1, 4,  'Shadow 1', 'Shadow 2', conversions);  // s1 → s2 (4:1)
  applyStep(shS, shD, 2, 5,  'Shadow 2', 'Shadow 3', conversions);  // s2 → s3 (5:1)
  applyMulti(shS, shD, 0, 2, 12, 'Shadow 0', 'Shadow 2', 'via Shadow 1', conversions);   // 3×4=12
  applyMulti(shS, shD, 1, 3, 20, 'Shadow 1', 'Shadow 3', 'via Shadow 2', conversions);   // 4×5=20
  applyMulti(shS, shD, 0, 3, 60, 'Shadow 0', 'Shadow 3', 'via Shadow 1 & 2', conversions); // 3×4×5=60

  const needed = [
    needXp      > 0 ? { key: 'xp',      label: 'XP',       amount: needXp,      rarity: 'blue'    } : null,
    gpD[0]      > 0 ? { key: 'gp',      label: 'GP',        amount: gpD[0],      rarity: 'blue'    } : null,
    gpD[1]      > 0 ? { key: 'gp2',     label: 'GP 2',      amount: gpD[1],      rarity: 'purple'  } : null,
    gpD[2]      > 0 ? { key: 'gp3',     label: 'GP 3',      amount: gpD[2],      rarity: 'yellow'  } : null,
    shD[1]      > 0 ? { key: 'shadow1', label: 'Shadow 1',  amount: shD[1],      rarity: 'purple'  } : null,
    shD[2]      > 0 ? { key: 'shadow2', label: 'Shadow 2',  amount: shD[2],      rarity: 'yellow'  } : null,
    shD[3]      > 0 ? { key: 'shadow3', label: 'Shadow 3',  amount: shD[3],      rarity: 'red'     } : null,
    needLattice > 0 ? { key: 'lattice', label: 'Lattice',   amount: needLattice, rarity: 'lattice' } : null,
  ].filter(Boolean);

  return { complete: needed.length === 0, needed, conversions };
}
