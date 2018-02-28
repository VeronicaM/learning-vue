Vue.component("task", {
  name: "task",
  props: ["name", "value", "completed"],
  data() {},
  template: `<div>
                <input 
                  type="checkbox"
                  :name="name" 
                  :value ="value"
                  :checked="completed"
                  @click="onClick(value)"
                 />
                {{name}}
             </div>`,
  methods: {
    completeTask(task) {
      task.completed = true;
    },
    onClick(value) {
      this.$parent.$emit("selected", value);
    }
  },
  data: function() {
    return {};
  }
});
