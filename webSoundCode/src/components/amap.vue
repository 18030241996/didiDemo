<template>
    <div class="amap-content">
      <el-amap class="amap-box" :events="events" vid="amap-vue" :plugin="plugins" :center="center" ref="map"  :amap-manager="amapManager">

      </el-amap>
    </div>
</template>

<script>
    import { AMapManager } from 'vue-amap'
    let amapManager = new AMapManager();
    export default {
      name: "amap",
      data() {
        let self = this;
        return {
          amapManager,
          center: [118.04, 24.26],
          events:{
            click: ()=>{
              this._setCitys()
            }
          },
          plugins:[
            // {
            //   pName: 'Scale',
            //   direction: false
            // },
            // {
            //   pName: 'ToolBar'
            // },
            {
              pName: 'Geolocation'
            }
          ]
        }
      },
      methods:{
        _setCitys (city) {
          this.$refs.map.$$getInstance().setCity(city)
        }
      }
    }
</script>

<style scoped>
.amap-content{
  width: 100%;
  height: 100%;
}
</style>
