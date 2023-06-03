<script lang="ts">
    function myPromise(): Promise<number> {
        return new Promise((resolve, reject) => {
            let randomNumber = Math.floor(Math.random() * 100);
            const isEven = randomNumber % 2 === 0;
            setTimeout(() => {
                isEven ? resolve(randomNumber) : reject("No Odd Numbers Allowed");
                console.log(randomNumber);
            }, 1000);
        });
    }

    let promise: Promise<number>;

    async function getRandomNumber(): Promise<number> {
        try {
            const data = myPromise();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    promise = getRandomNumber();

    function handleClick(): void {
        promise = getRandomNumber();
    }
</script>

<button on:click={handleClick}> generate random number </button>

{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error}</p>
{/await}
