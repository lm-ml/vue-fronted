<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-button type="primary" @click="handleClick">Button</a-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      let payload = {
        airline: "airline",
        airlineId: "airlineId",
        sourceAirport: "sourceAirport"
      };
      let routeJsonPath;
      this.resourceService.getResource(
        this.resourceService.resources.lucene.flight.routeJson,
        {},
        result => {
          routeJsonPath = result;
        }
      );
      let param = {
        type: "@@@@@@type######",
        codeShare: "@@@@@@codeShare######"
      };
      this.http.postJson(
        routeJsonPath,
        param,
        payload,
        callback => {
          console.log(callback);
        },
        exception => {
          console.log(exception);
        }
      );
      let routeFormPath;
      this.resourceService.getResource(
        this.resourceService.resources.lucene.flight.routeForm,
        {},
        result => {
          routeFormPath = result;
        }
      );
      this.http.postForm(
        routeFormPath,
        param,
        callback => {
          console.log(callback);
        },
        exception => {
          console.log(exception);
        }
      );
    }
  }
};
</script>