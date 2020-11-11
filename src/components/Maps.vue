<template>
  <GMap
    ref="gMap"
    language="ja"
    :center="{
      lat: markers[0].position.lat,
      lng: markers[0].position.lng,
    }"
    :options="{ fullscreenControl: false }"
    :zoom="16"
  >
    <GMapMarker
      v-for="(location, id) in markers"
      :key="id"
      :position="{
        lat: location.position.lat,
        lng: location.position.lng,
      }"
    >
      <GMapInfoWindow :options="{ maxWidth: 200 }">
        <code>
          lat: {{ location.position.lat }}, lng:
          {{ location.position.lng }}
        </code>
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 35.6895771, lng: 139.7001213 } },
        { position: { lat: 35.6898239, lng: 139.6979712 } },
        { position: { lat: 35.6912973, lng: 139.7030201 } },
        { position: { lat: 35.688771, lng: 139.6980531 } },
      ],
    }
  },
}
</script>
