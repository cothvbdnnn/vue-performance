<template>
  <el-dialog
    :title="title"
    :visible="currentVisible"
    :width="width"
    :before-close="handleClose"
  >
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button
        type="primary"
        :disabled="isConfirm"
        tertiary
        @click="handleClose"
        >Close
      </el-button>
      <el-button type="primary" :loading="isConfirm" @click="handleConfirm"
        >Confirm</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: {
    title: {
      type: String,
      default: function () {
        return "Example"
      }
    },
    isVisible: {
      type: Boolean,
      default: null,
    },
    width: {
      type: String,
      default: "",
    },
    isConfirm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    currentVisible() {
      return this.isVisible ?? this.visible;
    }
  },
  methods: {
    handleClose() {
      this.visible = false;
    },
    handleOpen() {
      this.visible = true;
    },
    handleConfirm() {
      this.$emit('confirm');
    },
  },
};
</script>
