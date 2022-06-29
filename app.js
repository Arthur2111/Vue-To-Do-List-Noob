const app = Vue.createApp({
    data () {
        return {
            goals: [],
            // added goals will be added into goals with a method
            addedGoals: '',
            visible: true,
            caption: 'Hide'
        }
    },
    methods: {
        inputGoals() {
            
            this.goals.push(this.addedGoals)
            this.addedGoals = ''
            console.log('flag1')
        },
        toggleVisibility() {
            this.visible= !this.visible
            if (this.visible) {
                this.caption= 'Hide'
            } else {
                this.caption = 'Show List'
            }
            console.log('flag2')
        },
        removeGoal(index) {
            this.goals.splice(index,1)
        }
    }

})

app.mount('#assignment')