<script lang="ts">
    import { onMount } from "svelte";

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
    }

    let jobs: Job[];
    async function fetchData<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = (await response.json()) as T;
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    onMount(async () => {
        jobs = await fetchData<Job[]>("../data.json");
        console.log(jobs, jobs.length);
    });
</script>

{#await jobs}
    <p>Loading Jobs</p>
{:then values}
    {#each values as currentValue}
        <span>{currentValue.company}</span>
    {/each}
{:catch error}
    <span>{error.message}</span>
{/await}

<style>
</style>
