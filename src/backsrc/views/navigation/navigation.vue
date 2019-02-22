<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    hide-overlay
    statelessapp
    app
  >
    <v-toolbar flat>
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="item in itemss"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.title"
          @click="aa"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
      <v-list-group prepend-icon="account_circle" value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>任务管理</v-list-tile-title>
        </v-list-tile>

        <v-list-group no-action sub-group value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>政策学习任务管理</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(admin, i) in admins" :key="i" @click="aa">
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>学习考核任务管理</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="aa">
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>实战任务管理</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(crud, i) in somecruds" :key="i" @click="aa">
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      admins: [
        ["政策学习任务发布", "people_outline"],
        ["政策学习任务管理", "settings"]
      ],
      cruds: [
        ["考核任务发布", "add"],
        ["考核人物状态管理", "insert_drive_file"]
      ],
      somecruds: [
        ["实战任务状态审批", "add"],
        ["实战任务上架/下架", "insert_drive_file"]
      ],
      drawer: true,
      mini: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      right: null,
      itemss: [
        {
          action: "local_activity",
          title: "用户管理",
          items: [
            { title: "用户状态修改", icon: "question_answer" },
            { title: "添加用户" },
            { title: "批量添加用户" }
          ]
        }
      ]
    };
  }
};
</script>
