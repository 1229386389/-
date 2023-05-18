export type music = {
	name: string;
	id: string;
	icon: string;
}
export const typeList:Array<music> = [
	{
		name: '华语男歌手',
		id: '1001',
		icon: 'person'
	},
	{
		name: '华语女歌手',
		id: '1002',
		icon:'personadd'
	},
	{
	  name: '华语组合/乐队', 
	  id: '1003',
	  icon: 'staff'
	},
	{
		name: '其他组合/乐队',
		id: '4003',
		icon: 'staff-filled'
	}
]