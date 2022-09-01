let catObj = {
  name:[`茶マル`,`chamalu`],
  age: 11,
  feature:`毛並みが茶色くて、丸っこい猫です。`,
  interests:[`毛並み`,`昼寝`,`夜の散歩`],
  bio:function(){
    console.log(`${catObj.name[0]}は${catObj.age}歳の${catObj.feature}`);
  },
  greeting: function(){
    console.log(`にゃおーにゃおにゃお！（${catObj.interests[0]}と${catObj.interests[1]}が大好きな${catObj.name[0]}だよ！）`);
  }
}
catObj.bio();
catObj.greeting();
