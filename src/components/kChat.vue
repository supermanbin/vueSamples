<template>
  <div class="message">
    <div :class="{ message__outer: true, 'message__outer--reverse': reverse }">
      <div class="message__avatar"></div>
      <div class="message__inner">
        <div class="message__bubble">
          <p>{{ content }}</p>
          <div class="message__emo">
            <span class="message__emo--icon"><InfoCircleTwoTone /></span>
            <span class="message__emo--icon"
              ><MehTwoTone twoToneColor="#ff00cc"
            /></span>
          </div>
        </div>
        <div class="message__status" @click="changeToReaded">
          <CheckCircleTwoTone v-if="isReaded" />
          <CheckCircleOutlined v-else style="color: #d3d3d3" />
        </div>
        <div class="message__actions"></div>
        <div class="message__spacer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  MehTwoTone,
  InfoCircleTwoTone,
  CheckCircleTwoTone,
  CheckCircleOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "KChat",
  components: {
    InfoCircleTwoTone,
    MehTwoTone,
    CheckCircleTwoTone,
    CheckCircleOutlined,
  },
  props: {
    content: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isReaded = ref(false);
    const changeToReaded = () => {
      isReaded.value = true;
    };

    return {
      isReaded,
      changeToReaded,
    };
  },
};
</script>

<style scoped>
div {
  --unit: 16px;
  --width: 32px;
  --shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  --bubble-color: dodgerblue;
}
.message {
  margin-bottom: 20px;
}
.message__outer {
  display: flex;
}
.message__outer--reverse {
  flex-direction: row-reverse;
}
.message__outer--reverse .message__inner {
  flex-direction: row-reverse;
}
.message__outer--reverse .message__bubble {
  border-radius: 10px 0 10px 10px;
  background: #fff;
  color: var(--bubble-color);
}
.message__outer--reverse .message__emo {
  left: var(--unit);
}
.message__avatar {
  width: var(--width);
  height: var(--width);
  border-radius: var(--width);
  background: #ccc;
  background-image: linear-gradient(-45deg, #eee, #fff);
  flex-shrink: 0;
  box-shadow: var(--shadow);
}
.message__inner {
  flex: 1;
  display: flex;
  padding: 0 var(--unit);
}
.message__bubble {
  position: relative;
  color: #fff;
  background: var(--bubble-color);
  padding: 10px;
  border-radius: 0 10px 10px;
  max-width: 80%;
  min-width: 40px;
}
.message__bubble p {
  margin: 0;
}
.message__spacer {
  flex: 1;
}
.message__status {
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  margin: 0 var(--unit);
  cursor: pointer;
}
.message__emo {
  position: absolute;
  right: var(--unit);
  bottom: -16px;
}
.message__emo--icon {
  display: inline-flex;
  border: 2px solid #fff;
  border-radius: 24px;
  margin: -5px;
}
.message__emo--icon :deep(.anticon) {
  font-size: 18px;
}
</style>
