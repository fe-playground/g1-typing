<template>
  <div>
    <TypingHeader />
    <TypingInputUser />
    <TypingTimer />
    <TypingContents />
    <TypingRank />
  </div>
</template>

<script>
import TypingHeader from "@/components/TypingHeader.vue";
import TypingInputUser from "@/components/TypingInputUser.vue";
import TypingContents from "@/components/TypingContents.vue";
import TypingTimer from "@/components/TypingTimer.vue";
import TypingRank from "@/components/TypingRank.vue";

export default {
  name: "typing",
  components: {
    TypingHeader,
    TypingInputUser,
    TypingContents,
    TypingTimer,
    TypingRank
  },
  data() {
    return {
      time: 0,
      myTimer: null
    };
  }
};
</script>