export type Dictionary = {
  id: string
  name: string
  description: string
  category: string
  url: string
  length: number
}

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaries: Dictionary[] = [
  { id: 'cet4', name: 'CET-4', description: '大学英语四级词库', category: '英语学习', url: '', length: 2607 },
  { id: 'cet6', name: 'CET-6', description: '大学英语六级词库', category: '英语学习', url: './dicts/CET6_T.json', length: 2345 },
  { id: 'gmat', name: 'GMAT', description: 'GMAT 词库', category: '英语学习', url: './dicts/GMAT_3_T.json', length: 3047 },
  { id: 'gre', name: 'GRE', description: 'GRE 词库', category: '英语学习', url: './dicts/GRE_3_T.json', length: 6515 },
  { id: 'ielts', name: 'IELTS', description: '雅思词库', category: '英语学习', url: './dicts/IELTS_3_T.json', length: 3575 },
  { id: 'kaoyan', name: '考研', description: '研究生英语入学考试词库', category: '英语学习', url: './dicts/KaoYan_3_T.json', length: 3728 },
  { id: 'level4', name: '专四', description: '英语专业四级词库', category: '英语学习', url: './dicts/Level4luan_2_T.json', length: 4025 },
  { id: 'level8', name: '专八', description: '英语专业八级词库', category: '英语学习', url: './dicts/Level8luan_2_T.json', length: 12197 },
  {
    id: 'sat',
    name: 'SAT',
    description: '美国 SAT 考试词库',
    category: '英语学习',
    url: './dicts/SAT_3_T.json',
    length: 4464,
  },
  { id: 'toefl', name: 'TOEFL', description: '托福考试常见词', category: '英语学习', url: './dicts/TOEFL_3_T.json', length: 4264 },
  { id: 'bec2', name: '商务英语', description: '商务英语常见词', category: '英语学习', url: './dicts/BEC_2_T.json', length: 2753 },
  { id: 'bec3', name: 'BEC', description: 'BEC考试常见词', category: '英语学习', url: './dicts/BEC_3_T.json', length: 2825 },
  { id: 'coder', name: 'Coder Dict', description: '程序员常见单词词库', category: '代码练习', url: './dicts/it-words.json', length: 1700 },
  { id: 'jsArray', name: 'JS: Array', description: 'JavaScript API 词典', category: '代码练习', url: './dicts/js-array.json', length: 36 },
  { id: 'jsDate', name: 'JS: Date', description: 'JavaScript API 词典', category: '代码练习', url: './dicts/js-date.json', length: 34 },
  {
    id: 'jsGlobal',
    name: 'JS: Global',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/js-global.json',
    length: 9,
  },
  {
    id: 'jsMapSet',
    name: 'JS: Map & Set',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/js-map-set.json',
    length: 16,
  },
  { id: 'jsMath', name: 'JS: Math', description: 'JavaScript API 词典', category: '代码练习', url: './dicts/js-math.json', length: 38 },
  {
    id: 'jsNumber',
    name: 'JS: Number',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/js-number.json',
    length: 22,
  },
  {
    id: 'jsObject',
    name: 'JS: Object',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/js-object.json',
    length: 37,
  },
  {
    id: 'jsPromise',
    name: 'JS: Promise',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/js-promise.json',
    length: 9,
  },
  {
    id: 'jsString',
    name: 'JS: String',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/js-string.json',
    length: 32,
  },
  {
    id: 'python-builtin',
    name: 'Python: Built-in',
    description: 'Python Built-in API',
    category: '代码练习',
    url: './dicts/python-builtin.json',
    length: 65,
  },
  {
    id: 'javeArrayList',
    name: 'Java: ArrayList',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/java-arraylist.json',
    length: 25,
  },
  {
    id: 'javaCharacter',
    name: 'Java: Character',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/java-character.json',
    length: 8,
  },
  {
    id: 'javaHashmap',
    name: 'Java: Hashmap',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/java-hashmap.json',
    length: 22,
  },
  {
    id: 'javaLinkedList',
    name: 'Java: LinkedList',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/java-linkedlist.json',
    length: 25,
  },
  {
    id: 'javaString',
    name: 'Java: String',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/java-string.json',
    length: 48,
  },
  {
    id: 'javaStringBuffer',
    name: 'Java: StringBuffer',
    description: 'JavaScript API 词典',
    category: '代码练习',
    url: './dicts/java-stringBuffer.json',
    length: 20,
  },
  {
    id: 'linuxCommand',
    name: 'Linux',
    description: 'Linux Command',
    category: '代码练习',
    url: './dicts/linux-command.json',
    length: 575,
  },
  {
    id: 'csharpList',
    name: 'C#: List API',
    description: 'C# List API',
    category: '代码练习',
    url: './dicts/csharp-list.json',
    length: 36,
  },
  {
    id: 'san1',
    name: '三年级上',
    description: '人教版三年级上册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue3_1_T.json',
    length: 64,
  },
  {
    id: 'san2',
    name: '三年级下',
    description: '人教版三年级下册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue3_2_T.json',
    length: 72,
  },
  {
    id: 'si1',
    name: '四年级上',
    description: '人教版四年级上册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue4_1_T.json',
    length: 84,
  },
  {
    id: 'si2',
    name: '四年级下',
    description: '人教版四年级下册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue4_2_T.json',
    length: 104,
  },
  {
    id: 'wu1',
    name: '五年级上',
    description: '人教版五年级上册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue5_1_T.json',
    length: 131,
  },
  {
    id: 'wu2',
    name: '五年级下',
    description: '人教版五年级下册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue5_2_T.json',
    length: 156,
  },
  {
    id: 'liu1',
    name: '六年级上',
    description: '人教版六年级上册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue6_1_T.json',
    length: 130,
  },
  {
    id: 'liu2',
    name: '六年级下',
    description: '人教版六年级下册',
    category: '人教版英语',
    url: './dicts/PEPXiaoXue6_2_T.json',
    length: 108,
  },
  {
    id: 'qi1',
    name: '七年级上',
    description: '人教版七年级上册',
    category: '人教版英语',
    url: './dicts/PEPChuZhong7_1_T.json',
    length: 392,
  },
  {
    id: 'qi2',
    name: '七年级下',
    description: '人教版七年级下册',
    category: '人教版英语',
    url: './dicts/PEPChuZhong7_1_T.json',
    length: 392,
  },
  {
    id: 'ba1',
    name: '八年级上',
    description: '人教版八年级上册',
    category: '人教版英语',
    url: './dicts/PEPChuZhong8_1_T.json',
    length: 419,
  },
  {
    id: 'ba2',
    name: '八年级下',
    description: '人教版八年级下册',
    category: '人教版英语',
    url: './dicts/PEPChuZhong8_2_T.json',
    length: 466,
  },
  {
    id: 'jiu',
    name: '九年级',
    description: '人教版九年级全册',
    category: '人教版英语',
    url: './dicts/PEPChuZhong9_1_T.json',
    length: 551,
  },
  {
    id: 'renjiaogaozhong1',
    name: '高中必修1',
    description: '人教版高中必修1',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_1_T.json',
    length: 311,
  },
  {
    id: 'renjiaogaozhong2',
    name: '高中必修2',
    description: '人教版高中必修2',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_2_T.json',
    length: 319,
  },
  {
    id: 'renjiaogaozhong3',
    name: '高中必修3',
    description: '人教版高中必修3',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_3_T.json',
    length: 366,
  },
  {
    id: 'renjiaogaozhong4',
    name: '高中必修4',
    description: '人教版高中必修4',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_4_T.json',
    length: 307,
  },
  {
    id: 'renjiaogaozhong5',
    name: '高中必修5',
    description: '人教版高中必修5',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_5_T.json',
    length: 357,
  },
  {
    id: 'renjiaogaozhong6',
    name: '高中选修6',
    description: '人教版高中选修6',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_6_T.json',
    length: 391,
  },
  {
    id: 'renjiaogaozhong7',
    name: '高中选修7',
    description: '人教版高中选修7',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_7_T.json',
    length: 384,
  },
  {
    id: 'renjiaogaozhong8',
    name: '高中选修8',
    description: '人教版高中选修8',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_8_T.json',
    length: 420,
  },
  {
    id: 'renjiaogaozhong9',
    name: '高中选修9',
    description: '人教版高中选修9',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_9_T.json',
    length: 352,
  },
  {
    id: 'renjiaogaozhong10',
    name: '高中选修10',
    description: '人教版高中选修10',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_10_T.json',
    length: 361,
  },
  {
    id: 'renjiaogaozhong11',
    name: '高中选修11',
    description: '人教版高中选修11',
    category: '人教版英语',
    url: './dicts/PEPGaoZhong_11_T.json',
    length: 309,
  },
  {
    id: 'nce1',
    name: '新概念英语-1',
    description: '新概念英语第一册',
    category: '新概念英语',
    url: './dicts/NCE_1.json',
    length: 900,
  },
  {
    id: 'nce2',
    name: '新概念英语-2',
    description: '新概念英语第二册',
    category: '新概念英语',
    url: './dicts/NCE_2.json',
    length: 858,
  },
  {
    id: 'nce3',
    name: '新概念英语-3',
    description: '新概念英语第三册',
    category: '新概念英语',
    url: './dicts/NCE_3.json',
    length: 1052,
  },
  {
    id: 'nce4',
    name: '新概念英语-4',
    description: '新概念英语第四册',
    category: '新概念英语',
    url: './dicts/NCE_4.json',
    length: 784,
  },
  {
    id: 'waiyan1',
    name: '外研七年级上册',
    description: '外研版七年级上册',
    category: '外研版英语',
    url: './dicts/WaiYanSheChuZhong_1_T.json',
    length: 629,
  },
  {
    id: 'waiyan2',
    name: '外研七年级下册',
    description: '外研版七年级下册',
    category: '外研版英语',
    url: './dicts/WaiYanSheChuZhong_2_T.json',
    length: 438,
  },
  {
    id: 'waiyan3',
    name: '外研八年级上册',
    description: '外研版八年级上册',
    category: '外研版英语',
    url: './dicts/WaiYanSheChuZhong_3_T.json',
    length: 320,
  },
  {
    id: 'waiyan4',
    name: '外研八年级下册',
    description: '外研版八年级下册',
    category: '外研版英语',
    url: './dicts/WaiYanSheChuZhong_4_T.json',
    length: 266,
  },
  {
    id: 'waiyan5',
    name: '外研九年级上册',
    description: '外研版九年级上册',
    category: '外研版英语',
    url: './dicts/WaiYanSheChuZhong_5_T.json',
    length: 381,
  },
  {
    id: 'waiyan6',
    name: '外研九年级下册',
    description: '外研版九年级下册',
    category: '外研版英语',
    url: './dicts/WaiYanSheChuZhong_6_T.json',
    length: 128,
  },
  {
    id: 'beishi1',
    name: '高中必修1',
    description: '北师大版高中必修1',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_1_T.json',
    length: 226,
  },
  {
    id: 'beishi2',
    name: '高中必修2',
    description: '北师大版高中必修2',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_2_T.json',
    length: 244,
  },
  {
    id: 'beishi3',
    name: '高中必修3',
    description: '北师大版高中必修3',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_3_T.json',
    length: 295,
  },
  {
    id: 'beishi4',
    name: '高中必修4',
    description: '北师大版高中必修4',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_4_T.json',
    length: 336,
  },
  {
    id: 'beishi5',
    name: '高中必修5',
    description: '北师大版高中必修5',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_5_T.json',
    length: 327,
  },
  {
    id: 'beishi6',
    name: '高中选修6',
    description: '北师大版高中选修6',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_6_T.json',
    length: 271,
  },
  {
    id: 'beishi7',
    name: '高中选修7',
    description: '北师大版高中选修7',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_7_T.json',
    length: 334,
  },
  {
    id: 'beishi8',
    name: '高中选修8',
    description: '北师大版高中选修8',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_8_T.json',
    length: 364,
  },
  {
    id: 'beishi9',
    name: '高中选修9',
    description: '北师大版高中选修9',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_9_T.json',
    length: 299,
  },
  {
    id: 'beishi10',
    name: '高中选修10',
    description: '北师大版高中选修10',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_10_T.json',
    length: 267,
  },
  {
    id: 'beishi11',
    name: '高中选修11',
    description: '北师大版高中选修11',
    category: '北师大版英语',
    url: './dicts/BeiShiGaoZhong_11_T.json',
    length: 330,
  },
  {
    id: 'SATen',
    name: 'SAT英英',
    description: 'SAT英英',
    category: '英语学习',
    url: './dicts/SATen.json',
    length: 2683,
  },
  {
    id: 'japnese001',
    name: 'japanese common word',
    description: '日语常用单词',
    category: '日语学习',
    url: './dicts/Japanesebasicword.json',
    length: 100,
  },
]

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
