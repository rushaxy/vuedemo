<template>
   <div class="">
       <h2>page.vue</h2>
       <Table :columns="columns1" :data="data1"></Table>
   </div>
</template>


<script>
export default {
    data(){
        return  {
             columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title:'operation',
                        width:120,
                        render:(h,params)=>{

                            return h('div',[
                                h('Button',{
                                    style: {
                                         marginRight: '5px',
                                         'margin-left': '5px',
                                         'background': '#f56c6c',
                                         color: '#fff',
                                         'padding': '2px 8px'
                                    },
                                    on:{
                                         click: () => {
                                             this.$Modal.confirm({
                                                 title: '确认删除',
                                                 content: '<p>是否确认删除？</p>',
                                                 onOk:()=>{
                                                     this.remove(params.index);
                                                     this.$Message.info('删除成功');
                                                 },
                                                 onCancel:()=>{
                                                     this.$Message.info('取消删除');
                                                 }
                                             })
                                        }
                                    }
                                },'delete')
                            ])
                    
                        }
                    }
             ],
              data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]




        }
    },
    components:{},
    methoded() {},
    methods: {
        remove (index) {
            this.data1.splice(index, 1);
        },
    }
}
</script>





