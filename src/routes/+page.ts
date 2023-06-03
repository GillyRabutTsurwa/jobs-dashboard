interface Job {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

export function load({ fetch }) {
    async function fetchData<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = response.json() as T;
            return data;
        } catch (error) {
            throw new Error("error");
        }
    }

    return {
        jobs: fetchData<Job[]>("json/data.json"),
    };
}
