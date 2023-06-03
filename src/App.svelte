<script lang="ts">
    import Banner from "./lib/components/Banner.svelte";

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

    promise = fetchData("./src/json/data.json");
    console.log(promise);
</script>

<Banner />
{#await promise}
    <p>Loading Jobs</p>
{:then jobs}
    <ul class="jobs" />
    {#each jobs as currentJob}
        <li>
            <figure>
                <img src={currentJob.logo} alt={currentJob.company} />
            </figure>
            <div>
                <div>
                    <span>{currentJob.company}</span>
                    {#if currentJob.new}
                        <span>New</span>
                    {/if}
                    {#if currentJob.featured}
                        <span>Featured</span>
                    {/if}
                </div>
                <span>{currentJob.position}</span>
                <div>
                    <span>{currentJob.postedAt}</span>
                    <span>{currentJob.contract}</span>
                    <span>{currentJob.location}</span>
                </div>
            </div>
            <div>
                <span>{currentJob.role}</span>
                <span>{currentJob.level}</span>
                {#if currentJob.languages}
                    {#each currentJob.languages as currentLanguage}
                        <span>{currentLanguage}</span>
                    {/each}
                {/if}
                {#if currentJob.tools}
                    {#each currentJob.tools as currentTool}
                        <span>{currentTool}</span>
                    {/each}
                {/if}
            </div>
        </li>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
</style>
