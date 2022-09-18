/**
 * Helper functions for calculating price
 */
export class PriceHelper {
    /**
     * Get the price in ethereum.
     * @param accountBalance The account balance.
     * @returns The price in Ethereum.
     */
    public ethPrice(accountBalance: number): number {
        return Math.round(accountBalance);
    }

    /**
     * Get the price in USD.
     * @param accountBalance The account balance.
     * @param ethPrice The price in ethereum.
     * @returns
     */
    public usdPrice(accountBalance: number, ethPrice: number): number {
        return Math.round(accountBalance * ethPrice);
    }
}
