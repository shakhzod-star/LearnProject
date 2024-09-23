import { ref } from 'vue'

// First composable: This one manages its own state and exposes it for external use
export function useSecond() {
    const countTwo = ref(0)
    const incrementCountTwo = () => {
        countTwo.value++
    }

    return {
        countTwo,
        incrementCountTwo,
    }
}

// // Second composable: Uses the `useSecond` composable inside it
export const useGlobalComposable = () => {
    // Create the first counter in this composable
    const count = ref(0)

    // Use the `useSecond` composable inside
    const { countTwo, incrementCountTwo } = useSecond()

    const counterFn = () => {
        count.value++
        incrementCountTwo()  // Call the function from the second composable
    }

    return {
        count,
        countTwo,      // Return countTwo so it's accessible outside
        counterFn,     // Function to increment both counts
    }
}
 