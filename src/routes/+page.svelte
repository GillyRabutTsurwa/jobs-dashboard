<script lang="ts">
    export let data;
    import Header from "$lib/components/Header.svelte";

    console.log(data);

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

    let jobs: Job[] = data.jobs;
</script>

<Header />
<div class="container-jobs">
    <ul class="jobs">
        {#each jobs as currentJob}
            <li class="jobs__item">
                <figure class="jobs__item--image">
                    <img src={currentJob.logo} alt={currentJob.company} />
                </figure>
                <div class="jobs__item--job-data">
                    <div class="name-n-status">
                        <h4 class="company">{currentJob.company}</h4>
                        {#if currentJob.new}
                            <span class="new">New</span>
                        {/if}
                        {#if currentJob.featured}
                            <span class="featured">Featured</span>
                        {/if}
                    </div>
                    <span class="position">{currentJob.position}</span>
                    <div class="time-n-place">
                        <span>{currentJob.postedAt}</span>
                        <span>{currentJob.contract}</span>
                        <span>{currentJob.location}</span>
                    </div>
                </div>
                <div class="jobs__item--tools">
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
    </ul>
</div>

<style>
    .container-jobs {
        width: 75%;
        margin: 9rem auto 6rem auto;
    }
    .jobs {
        list-style: none;
        width: 100%;
    }
    .jobs__item {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        padding: 2.5rem;
        -webkit-box-shadow: 5px 5px 10px 5px rgba(var(--colour-secondary-values), 0.15);
        box-shadow: 5px 5px 10px 5px rgba(var(--colour-secondary-values), 0.15);
        border-radius: 0.5rem;
    }

    .jobs__item--image {
        margin-right: 2rem;
    }
    .jobs__item--job-data {
        margin-right: auto;
    }
    .jobs__item--tools > * {
        padding: 0.5rem;
        background-color: rgba(var(--colour-secondary-values), 0.15);
        border-radius: 5px;
        margin-left: 3rem;
    }

    /* children of jobs__item--job-data */
    .name-n-status .company {
        display: inline-block;
        margin-right: 1rem;
    }

    .name-n-status .new,
    .name-n-status .featured {
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 0.5rem;
        border-radius: 1rem;
        color: var(--colour-background);
    }

    .name-n-status .new {
        background-color: var(--colour-primary);
    }
    .name-n-status .featured {
        background-color: var(--colour-tertiary);
    }

    .position {
        display: inline-block;
        margin: 1.25rem 0;
        color: var(--colour-tertiary);
        font-weight: 700;
        font-size: 1.75rem;
    }

    .time-n-place > * {
        color: #999;
    }

    .time-n-place > *:not(:last-child)::after {
        content: "\2022";
        margin: 0 1rem;
    }
</style>
