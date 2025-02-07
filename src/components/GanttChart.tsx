import React, { useRef } from 'react'
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Edit,
  Selection,
  VirtualScroll,
  ContextMenu,
  Toolbar,
} from '@syncfusion/ej2-react-gantt'
import '@syncfusion/ej2-react-gantt/styles/material.css'
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-grids/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-gantt/styles/material.css'
import '@syncfusion/ej2-layouts/styles/material.css'
import '@syncfusion/ej2-lists/styles/material.css'
import '@syncfusion/ej2-richtexteditor/styles/material.css'
import '@syncfusion/ej2-treegrid/styles/material.css'
import { DATA } from './data'

const taskFields = {
  id: 'taskId',
  name: 'taskName',
  startDate: 'startDate',
  endDate: 'endDate',
  parentID: 'parentId',
  duration: 'duration',
  progress: 'progress',
  custo: 'custo',
  peso: 'peso',
  level: 'level',
  key: 'key',
}

const editSettings: any = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true,
  newRowPosition: 'Below',
}

export const toolbar = [
  'Add',
  'Indent',
  'Outdent',
  {
    text: 'save',
    id: 'custom_save',
    prefixIcon: 'fa-solid fa-rotate-right',
  },
]

export default function GanttChart() {
  const ganttRef = useRef<GanttComponent>(null)

  function handleToolbarClick(args) {
    if (args.item.properties.id === 'custom_save') {
      console.log('entrei', ganttRef.current?.dataSource)
    }
  }
  return (
    <>
      <GanttComponent
        id="Gantt"
        ref={ganttRef}
        dataSource={DATA}
        taskFields={taskFields}
        height="700px"
        width="100%"
        enableContextMenu={true}
        toolbar={toolbar}
        toolbarClick={handleToolbarClick}
        editSettings={editSettings}
      >
        <ColumnsDirective>
          <ColumnDirective field="taskId" headerText="ID" width="100" />
          <ColumnDirective field="taskName" headerText="Tarefa" width="250" />
          <ColumnDirective field="parentId" headerText="Parent" width="250" />
          <ColumnDirective field="startDate" headerText="Início" width="150" />
          <ColumnDirective field="endDate" headerText="Fim" width="150" />
          <ColumnDirective field="duration" headerText="Duração" width="100" />
          <ColumnDirective field="progress" headerText="Progresso" width="100" />
        </ColumnsDirective>
        <Inject services={[Edit, Selection, VirtualScroll, ContextMenu, Toolbar]} />
      </GanttComponent>
    </>
  )
}
