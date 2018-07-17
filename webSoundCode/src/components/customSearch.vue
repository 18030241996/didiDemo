<template>
  <div class="tip">
    <input v-model="searchText" class="custom-componet-input" :id="id"  placeholder="请输入地点"  style="border: none;outline: none;width: 100%"/>
  </div>
</template>

<script>
  // const customSearch = createCustomComponent({
  // template: `<div class="tip"><input class="custom-componet-input" :id="id"  placeholder="请输入地点"  style="border: none;outline: none;width: 100%"/></div>`,
  // data() {
  //   return {
  //     id: `custom-componet-input-${Math.random()}`
  //   }
  // },
  // init(){},
  // contextReady(_options) {
  //   const options = {
  //     ..._options,
  //     input: this.id
  //   }
  //   AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'], () => {
  //     const autocomplete = new AMap.Autocomplete(options)
  //     AMap.event.addListener(autocomplete, 'select', (e) => {
  //       this.$emit('select', e.poi)
  //     })
  //     this.$amapComponent = autocomplete
  //   })
  // }
  //
  // })
    import {mapMutations} from 'vuex'
    export default ({
      name: "custom-search",
      data() {
        return{
          searchText: '',
          searchConten: [],
          //PlaceSearch:'',
          id: 'custom-input'
        }
      },
      // mounted() {
      //   AMap.plugin(['AMap.PlaceSearch'], () => {
      //     this.PlaceSearch = new AMap.PlaceSearch({})
      //   })
      // },
      methods:{
        ...mapMutations([
          'setSearchConten'
        ]),
        mySearch() {
          return new AMap.Autocomplete({})
        }
      },
      watch:{
        searchText () {
          //console.log(this.mySearch())
          this.mySearch().search(this.searchText,  (status, result) =>{
            //console.log(result)
            if(result.info=="OK" && result.tips.length>0){
              this.setSearchConten(result.tips)
            }
            else {
              this.setSearchConten('')
            }
          })
        }
      }
    })
</script>

<style scoped>

</style>
