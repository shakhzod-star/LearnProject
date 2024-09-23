export const myMixin =  {
    data(){
        return {
            count : 0 
        }
    },
    methods:{
        counterFn(){
            this.count++
        }
    }

}
export const useSecond =  {
    data(){
        return {
            msg : 'Hello World',
            count: 0 
        }
    }
}