/**
 * Helper functions for returning current date and time
 */
export class DateHelper {
    /**
     * Get the current date and time.
     * @returns The current date and time.
     */
    public currentDate(): string {
        const today: Date = new Date();
        const date: string =
            String(today.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(today.getDate()).padStart(2, "0") +
            "-" +
            String(today.getFullYear()) +
            " " +
            String(today.getHours()) +
            ":" +
            String(today.getMinutes());
        return date;
    }
}
