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

    let promise: Promise<Job[]>;
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

    promise = fetchData("../data.json");
    console.log(promise);

    onMount(async () => {});
</script>

{#await promise}
    <p>Loading Jobs</p>
{:then jobs}
    {#each jobs as currentJob}
        <span>{currentJob.company}</span>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
</style>
