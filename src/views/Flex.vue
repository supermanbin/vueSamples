<template>
  <k-chat
    content="One particular thing that makes me happy is that the heavy usage of flexbox. I really, really like that!"
  />
  <k-chat
    reverse
    content="Each message can have a set of actions that appears on hover like"
  />
  <a-form>
    <a-form-item>
      <a-input
        :value="inputV"
        placeholder="输入队员"
        @change="onChange"
        @pressEnter="onEnter"
      />
    </a-form-item>
    <a-form-item>
      <a-input :value="splitNum" placeholder="" @change="onChangeNum" />
    </a-form-item>
    <a-form-item label="队员">
      <a-tag v-for="(item, index) in team" :key="index">{{ item }}</a-tag>
    </a-form-item>
    <a-form-item>
      <a-button
        :disabled="!team.length"
        @click="splitTeam"
        type="primary"
        style="margin-right: 12px"
        >分队</a-button
      >
      <a-button @click="reset" type="primary">重分</a-button>
    </a-form-item>
    <a-form-item label="红队">
      <a-tag v-for="(item, index) in teamA" :key="index" color="#f50">{{
        item
      }}</a-tag>
    </a-form-item>
    <a-form-item label="蓝队">
      <a-tag v-for="(item, index) in teamB" :key="index" color="#108ee9">{{
        item
      }}</a-tag>
    </a-form-item>
    <a-form-item label="白队">
      <a-tag v-for="(item, index) in teamC" :key="index" color="#108ee9">{{
        item
      }}</a-tag>
    </a-form-item>
  </a-form>
</template>

<script>
import { ref } from "vue";
import KChat from "@/components/kChat.vue";

function getIntRandom(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  components: {
    KChat,
  },
  setup() {
    // const t = localStorage.getItem("team").split(",").length
    //   ? localStorage.getItem("team").split(",")
    //   : [];
    const t =
      "老邓,春鹏,王超,蔡伟,吴迪,家龙,张强,大洋,陈壮,大黄,老冯,沈伟,小闯,老何,正锋,大斌,大松,成成,东哥,老肖,书生,王坤".split(
        ","
      );
    const team = ref(t);
    const teamA = ref([]);
    const teamB = ref([]);
    const teamC = ref([]);
    const inputV = ref("");
    const splitNum = ref(3);

    const onChange = (e) => {
      inputV.value = e.target.value;
    };

    const onEnter = () => {
      // console.log("======> value: ", inputV.value);
      team.value.push(inputV.value);
      inputV.value = "";
    };

    const splitTeam = () => {
      const length = team.value.length;
      localStorage.setItem("team", team.value);
      for (let i = 0; i < length; i++) {
        const random = getIntRandom(team.value.length, 0);
        // console.log("======>", random);
        const n = i % 3;
        if (n === 0) {
          teamA.value.push(team.value.splice(random, 1)[0]);
        } else if (n === 1) {
          teamB.value.push(team.value.splice(random, 1)[0]);
        } else {
          teamC.value.push(team.value.splice(random, 1)[0]);
        }
      }
    };

    const reset = () => {
      team.value = localStorage.getItem("team").split(",");
      teamA.value = [];
      teamB.value = [];
      teamC.value = [];
    };

    const onChangeNum = (e) => {
      splitNum.value = e.target.value;
    };

    return {
      team,
      teamA,
      teamB,
      teamC,
      inputV,
      onChange,
      onEnter,
      splitTeam,
      reset,
      splitNum,
      onChangeNum,
    };
  },
};
</script>
