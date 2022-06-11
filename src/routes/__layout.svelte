<div>
    <h1>hi</h1>
    <header>
        <h1>nooo</h1>
    </header>
    <slot />
</div>

<style lang="scss">
    :global{
        html{
            font-family: Arial, Helvetica, sans-serif;

            body{
                margin: 0;
            }
        }
    }

    header {
        background-color: pink;
        h1{
            color:yellow
        }
    }
</style>