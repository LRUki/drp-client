<template>
  <el-card
    class="border border-light my-5"
    shadow="hover"
    style="border-radius: 10px"
  >
    <div>
      <div class="mb-1">
        <h4>About the group</h4>
      </div>
    </div>
    <div class="container-fluid p-2">
      <div class="row d-flex flex-row justify-content-between my-1">
        <div class="col-lg-3">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-2 text-center font-weight-bold">
              {{ members.length }}
              <i class="el-icon-user-solid" />
            </div>
            <div class="col-lg-12 col-md-8 text-center text-muted">
              <h6 style="font-size: small">Members</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-2 text-center font-weight-bold">
              {{ threads.length }}
              <i class="el-icon-notebook-2" />
            </div>
            <div class="col-lg-12 col-md-8 text-center text-muted">
              <h6 style="font-size: small">Threads</h6>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-2 text-center font-weight-bold">
              {{ events.length }}
              <i class="el-icon-map-location" />
            </div>
            <div class="col-lg-12 col-md-8 text-center text-muted">
              <h6 style="font-size: small">Events</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <h6>
            {{ description }}
          </h6>
        </div>
      </div>
      <div class="col-12 pt-2 text-muted text-right">
        <h6>
          Created: {{ Moment(creationDate).fromNow() }} by @{{ authorId }}
        </h6>
      </div>
      <div
        style="
          height: 3px;
          width: 100%;
          background: linear-gradient(23deg, #ddd6f3 0%, #faaca8 100%);
        "
        class="my-2"
      />
      <el-tag v-for="tag in tags" :key="tag" type="plain" class="mx-1 my-1">
        {{ tag }}
      </el-tag>
    </div>
  </el-card>
</template>

<script lang="ts">
import { useSpace } from "@/hooks/useSpace";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Moment from "moment";

export default defineComponent({
  name: "Space",
  props: ["members", "threads", "events", "tags", "groupId"],
  setup(props) {
    const route = useRoute();
    const groupId = props.groupId as string;

    const { authorId, creationDate, description } = useSpace(groupId, true);
    return {
      authorId,
      creationDate,
      description,

      Moment,
    };
  },
});
</script>
<style>
@import "../../assets/styles/niched-styles.css";
</style>
