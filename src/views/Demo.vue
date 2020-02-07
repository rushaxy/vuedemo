<template>
   
 <div class="">
    <h2>demo.vue</h2>
   
    <Form :model="formData" :label-width="100">
        <FormItem label="name">
            <Input v-model="formData.name"/>
        </FormItem>

        <FormItem label="age">
            <Input v-model="formData.age"/>
        </FormItem>

        <FormItem>
            <!-- <Button type="primary" @click="handleSubmit('formInline')">Signin</Button> -->
            <Button @click="add" type="primary">新增</Button>
        </FormItem>
        <FormItem>
          
        </FormItem>
    </Form>



   
    <Table border :columns="columns" :data="data"></Table>
    <edit-list 
        @getAddData="getAddData" 
        @changeModal="changeModal" 
        :title="popData.title" 
        :modal="popData.modal" 
        :popData="popData.editData">
    </edit-list>

   </div>

</template>


<script>
import editList from './edit';
export default {
    name: '',
    data () {
        return{
            formData: {
                name: '',
                age: '',
            },


             columns: [
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

                        title: '操作',
                        //  key: 'action',
                        width: 250,
                         align: 'center',
                        render: (h, params) => {
                            return h('div', [
                            h('Button', {
                                    // props: {
                                    //     type: 'primary',
                                    //     size: 'small'
                                    // },
                                    style: {
                                        marginRight: '5px',
                                        'margin-left': '5px',
                                        'background': '#f56c6c',
                                        color: '#fff',
                                        'padding': '2px 8px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                            }, 'View'),
                            h('Button', {
                                // props: {
                                //         type: 'primary',
                                //         size: 'small'
                                // },
                                style: {
                                    marginRight: '5px',
                                    'margin-left': '5px',
                                    'background': '#f56c6c',
                                    color: '#fff',
                                    'padding': '2px 8px'
                                },
                                on: {
                                    click: () => {
                                        this.$Modal.confirm({
                                        title: '确认删除',
                                        content: '<p>是否确认删除？</p>',
                                        onOk: () => {
                                            // this.remove(params.index);
                                            console.log(123);
                                            console.log(params);
                                            this.remove(params.index)
                                        },
                                        onCancel: () => {
                                            this.$Message.info('取消删除');
                                        }
                                        });
                                    }
                                }
                            }, '删除'),
                            h('Button', {
                                //  props: {
                                //         type: 'error',
                                //         size: 'small'
                                //     },
                                style: {
                                    marginRight: '5px',
                                    'margin-left': '5px',
                                    'background': '#f56',
                                    color: '#fff',
                                    'padding': '2px 8px'
                                },
                                on: {
                                    click: () => {
                                        this.popData.modal = true;
                                        this.popData.title = '编辑';
                                        this.popData.editData = params.row;
                                    }
                                }
                            }, '编辑')
                            ]);
                        }
                    }
                ],
                 data: [
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
                ],
                popData:{
                    modal:false,
                    title:'',
                    editData:{}
                }
            };//return 
        },  
        components:{
            editList
        },
        methoded() {},
        methods: {
            show (index) {
                this.$Modal.info({
                    title: ' 基本信息',
                    content: 
                        `
                        Name： ${this.data[index].name} <br>
                        Age： ${this.data[index].age}<br>
                        Address：${this.data[index].address}<br/>
                        date：${this.data[index].date}
                         `

                })
            },

            add()  {
                this.data.push(this.formData);
            },
            remove(index){
                this.data.splice(index,1);
            },
            changeModal (param) {
                this.popData.modal = param;
            },
            getAddData (param) {
                 console.log(param);
                this.data.push(param);
            }
        }


    };
</script>
