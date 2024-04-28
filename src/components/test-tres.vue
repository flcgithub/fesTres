<template>
  <div style="width: 100%;height: 750px;margin: 0 auto;">
    <TresCanvas v-bind='tcConfig'>
      <!-- 这里是您的场景 -->
      <TresPerspectiveCamera 
        :position="[35, 35, 35]"
        :look-at="[0, 0, 0]"
        :args="[60, 1, 1, 1000]"
      />
      <TresMesh 
        :position="[0, 1.5, 0]" 
        @click="onPointerClick"
        @pointer-enter="onPointerEnter"
        @pointer-leave="onPointerLeave"
      >
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshBasicMaterial color="orange" />
      </TresMesh>

      <TresMesh :position="[5, 1.5, 0]">
        <TresConeGeometry :args="[0.5, 2, 16, 2, false, 0, Math.PI * 2]" />
        <TresMeshBasicMaterial color="green" />
      </TresMesh>

      <Suspense>
        <template #default>
          <skyBox texture="/skyBox/sky6.jpg" />
        </template>
        <!-- <skyBox texture="http://192.168.110.37:8080/sky1.jpg" /> -->
        <!-- http://127.0.0.1:8080/sky1.jpg -->
        <!-- https://cdn.polyhaven.com/asset_img/primary/kloofendal_48d_partly_cloudy_puresky.png?width=1920 -->
      </Suspense>
      <Suspense>
        <template #default>
          <GLTFModel :position="5" path="/models/gltf/DamagedHelmet/DamagedHelmet.gltf" draco />
        </template>
      </Suspense>

      <!-- 环境光 -->
      <TresAmbientLight :intensity="0.5" color="0x404040" />
      <!-- 平行光 -->
      <TresDirectionalLight :position="[100, 100, 100]" :intensity="1" color="0x404040" />

      <OrbitControls />
      <!-- 坐标辅助线 -->
      <TresAxesHelper :args="[50]" :position="[0, 0.01, 0]" />
      <!-- 网格面板 -->
      <TresGridHelper :args="[100, 50, '#2abd60', '#fff']" :position="[0, 0, 0]" />
    </TresCanvas>
  </div>
</template>

<script setup>
import * as THREE from "three"
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import skyBox from '@/plugins/skyBox/sky-box-mesh.vue'

const onPointerEnter = (evt, pointer) => {
  if ( evt ) evt.object.material.color.set('red')
}
const onPointerLeave = (evt, pointer) => {
  // if ( evt ) evt.material.color.set('green')
}
const onPointerClick = (evt, pointer) => {
  if ( evt ) evt.object.material.color.set('orange')
}

const tcConfig = {
	clearColor: "#201919",
	windowSize: false,
	shadows: true,
	toneMapping: THREE.ACESFilmicToneMapping,
	toneMappingExposure: 0.8,
}

</script>

<style lang='scss' scoped>

</style>