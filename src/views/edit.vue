<template>
    <Modal
        :width='400'
        class-name="content"
        v-model="modalFlag"
        :mask-closable="false"
        :closable="false"
    >
        <div slot="header" style="fontSize:14px;fontWeight:bold">
            <span>{{this.title}}</span>
        </div>
        <Form ref="ruleValidate" :model="editData" :label-width="60">
            <FormItem label="姓名" prop="name">
                <Input v-model="editData.name" placeholder=""/>
            </FormItem>
            <FormItem label="年龄" prop="age">
                <Input v-model="editData.age" placeholder=""/>
            </FormItem>
        </Form>
        <div slot="footer">
            <Button type="error" @click="_cancle">取消</Button>
            <Button type="primary" @click="_createApply">确定</Button>
        </div>
    </Modal>
</template>

<script>
export default {
  name: 'editor',
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    popData: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      modalFlag: false,
      editData: {
        name: '',
        age: '',
        address: ''
      }
    };
  },
  mounted () {},
  methods: {
    // @_cancle点击取消按钮
    _cancle () {
      this.modalFlag = false;
      console.log(this.editData);
      this.$emit('changeModal', false);
    },
    // @_createApply点击提交按钮
    _createApply () {
      this.modalFlag = false;
      if (this.title === '新增') {
        this.$emit('getAddData', this.editData);
        this.$Message.success('新增成功');
      } else {
        this.$Message.success('修改成功');
      }
      this.$emit('changeModal', false);
    }
  },
  watch: {
    modal (val) {
      this.modalFlag = val;
      this.editData = this.popData;
    },
    modalFlag (val) {
      this.$emit('changeModal', val);
      this.editData = this.popData;
    }
  }
};
</script>

<style  scoped>
</style>
