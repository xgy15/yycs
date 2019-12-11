// components/Tabbar/Tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这是富组件传来的标题
    titles: {
      type: Array,
      value: []
    },
    // 这是父组件传来的选中索引
    currentIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e) {
      // console.log(e)
      const index = e.currentTarget.dataset.index;
      // 子向父用事件传递，和 vue 差不多
      this.triggerEvent("titlesChange",{
        index
      })
    }
  }
})
