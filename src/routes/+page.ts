export function load({ fetch }) {
    async function fetchData<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        } catch (error) {
            throw new Error("error");
        }
    }

    return {
        jobs: fetchData("json/data.json"),
    };
}
