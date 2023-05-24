export interface BaseUpgradeParams {
    name: string;
    cost: number;
    pos: [number, number];
}

export interface IncrementalUpgradeParams extends BaseUpgradeParams {
    amount: number;
}

export interface MultiplierUpgradeParams extends BaseUpgradeParams {
    multiplier: number;
}