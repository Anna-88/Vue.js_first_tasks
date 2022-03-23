<template>
    <div>
        
        {{returningBook}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Library',
      computed: {
          ...mapGetters({
        finishedBooks : 'finishedBooks',
        returningBook: 'returningBook'
       })
    }
    
}
</script>