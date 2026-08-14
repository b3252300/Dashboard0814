<template>
  <div class="btnlist ms-auto">
    <div class="btn-group dropup">
      <Btn_BtnIcon
        id="DoctorDropdown"
        :title="DoctorTitle"
        :class="['dropdown-toggle', isActiveView(DoctorKey) ? 'active' : '']"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :key="DoctorKey"
      >
        <template v-slot:img>
          <Svg_Doctor />
        </template>
      </Btn_BtnIcon>

      <div class="footer_dropdown">
        <ul class="dropdown-menu" id="DoctorDropdownMenu">
          <li
            v-for="item in DoctorList"
            :key="item.Code"
            class="dropdown-item"
            @click="selectDoctorItem(item.Code, item.Name)"
          >
            {{ item.Name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="btn-group dropup">
      <Btn_BtnIcon
        id="TeamDropdown"
        :title="TeamTitle"
        :class="['dropdown-toggle', isActiveView(TeamKey) ? 'active' : '']"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        :key="TeamKey"
      >
        <template v-slot:img>
          <Svg_team />
        </template>
      </Btn_BtnIcon>
      <div class="footer_dropdown">
        <ul class="dropdown-menu" id="TeamDropdownMenu">
          <li
            v-for="item in TeamList"
            :key="item.Code"
            class="dropdown-item"
            @click="selectTeamItem(item.Code, item.Name)"
          >
            {{ item.Name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Btn_BtnIcon from "@/components/footer/Btn_BtnIcon.vue";
import Dropdown_menu from "@/components/Dropdown_menu.vue";

//svg 的 icon
import Svg_Doctor from "@/components/footer/Svg_Doctor.vue";
import Svg_team from "@/components/footer/Svg_team.vue";

import { toRefs, reactive, ref } from "vue";
import { btn_footerIcon } from "@/stores/btn_footerIcon";

const footerIcon = btn_footerIcon();
const { doctorId, teamId, isActive } = footerIcon;

const props = defineProps({
  DoctorList: {
    type: Array,
    default: () => {
      [];
    },
  },
  TeamList: {
    type: Array,
    default: () => {
      [];
    },
  },
  DoctorKey: {
    type: String,
    default: () => {
      "";
    },
  },
  DoctorTitle: {
    type: String,
    default: () => {
      "";
    },
  },
  TeamKey: {
    type: String,
    default: () => {
      "";
    },
  },
  TeamTitle: {
    type: String,
    default: () => {
      "";
    },
  },
});

const isActiveColor = ref(false);
const isActiveView = (item) => {
  return item != 0;
};

const { DoctorList, TeamList, DoctorKey, DoctorTitle, TeamKey, TeamTitle } =
  toRefs(props);
const emit = defineEmits(["get-doctor", "get-team"]);

const selectDoctorItem = (Index, Name) => {
  doctorId(Index);
  document
    .getElementById("DoctorDropdown")
    .setAttribute("aria-expanded", "false");
  document.getElementById("DoctorDropdownMenu").classList.remove("show");
  emit("get-doctor", { Code:Index, Name:Name, Select: footerIcon.selectedDoctors });
};

const selectTeamItem = (Index, Name) => {
  teamId(Index);
  document
    .getElementById("TeamDropdown")
    .setAttribute("aria-expanded", "false");
  document.getElementById("TeamDropdownMenu").classList.remove("show");
  emit("get-team",  { Code:Index, Name:Name, Select: footerIcon.selectedTeams });
};
</script>
<style lang="scss" scoped>
.btn-group {
  margin-left: 0.6rem;
}
.btnlist {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0;
}

.dropdown-menu {
  max-width: 17.4rem;
  width: 100%;
  max-height: 21rem;
  overflow-y: auto;
  background: #fff;
  border: none;
  @include scrollbar();
}
.dropdown-toggle {
  &.active {
    @include outline-ghost();
  }
  svg {
    width: 1.25rem;
    height: 1.31rem;
  }
}
</style>
