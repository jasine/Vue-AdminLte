module.exports = [
  {
    name: '控制台',
    link: '/',
    icon: 'fa-home',
    child:[]
  },
  {
    name: '测试任务',
    link: '/configurations',
    icon: 'fa-cogs',
    child:[]
  },
  {
    name: 'Users',
    link: '/users',
    icon: 'fa-user',
    child: [
    {
      name: 'New',
      link: '/user/new',
      icon: 'fa-circle-o',
    },
    {
      name: 'Lists',
      link: '/users',
      icon: 'fa-circle-o',
      child:[]

    }
    ]
  }
  
]