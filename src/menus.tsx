
export interface IMenu {
    name: string;
    chName?: string;
    subMenus?: Array<IMenu>;
  }
  
export const defaultMenus: Array<IMenu> = [
    { name: '工作流',
      subMenus: [
        { name: 'ProcessList', chName: '流程列表' },
        { name: 'WaitingList', chName: '待办任务' },
        { name: 'ForwardedList', chName: '已办任务' },
        { name: 'DowntaskList', chName: '完结任务' }
      ]
    },
    {
      name: 'Navigation One',
      subMenus: [
        { name: 'Option1' },
        { name: 'Option2' },
        { name: 'Option3' },
      ]
    }
  ]

export function getMenuByPath(pathName: string, menus: Array<IMenu>): IMenu|null {
    for(let i = 0;i<menus.length;++i) {
        if (menus[i].name === pathName) {
            return menus[i];
        }
        let subMenus = menus[i].subMenus;
        if (subMenus) {
            let result = getMenuByPath(pathName, subMenus);
            if (result) {
                return result;
            }
        }
    }
    return null;
}