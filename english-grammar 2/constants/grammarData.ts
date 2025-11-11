
import type { GrammarUnit } from '../types';

export const grammarData: GrammarUnit[] = [
  {
    id: 'unit3',
    title: 'Unit 3: Comparisons & Modals',
    topics: [
      {
        title: 'Superlative Adjectives',
        description: 'So sánh nhất được dùng để so sánh một đối tượng với tất cả các đối tượng khác trong cùng một nhóm.',
        subTopics: [
          {
            title: 'a. Tính từ ngắn (Short adjectives)',
            structure: 'S + V + the + short_adj-est + ...',
            examples: [
              { en: 'He is the dullest student in the class.', vi: 'Anh ấy là học sinh kém thông minh nhất lớp.' },
              { en: 'This is the slowest car I have ever driven.', vi: 'Đây là chiếc xe chậm nhất tôi từng lái.' },
            ],
          },
          {
            title: 'b. Tính từ dài (Long adjectives)',
            structure: 'S + V + the most + long_adj + ...',
            examples: [
              { en: 'She is the most beautiful girl.', vi: 'Cô ấy là cô gái xinh đẹp nhất.' },
              { en: 'This is the most expensive watch.', vi: 'Đây là chiếc đồng hồ đắt nhất.' },
            ],
          },
          {
            title: 'c. Các trường hợp bất quy tắc (Irregular cases)',
            examples: [
              { en: 'good -> the best', vi: 'tốt -> tốt nhất' },
              { en: 'bad -> the worst', vi: 'tệ -> tệ nhất' },
              { en: 'far -> the furthest / the farthest', vi: 'xa -> xa nhất' },
            ],
          },
        ],
      },
      {
        title: '“Can” for Ability',
        description: '“Can” nghĩa là “có thể” dùng để diễn tả khả năng.',
        subTopics: [
          {
            title: 'a. Thể khẳng định (Affirmative)',
            structure: 'S + can + V (infinitive)',
            examples: [{ en: 'She can dance.', vi: 'Cô ấy có thể nhảy.' }],
          },
          {
            title: 'b. Thể phủ định (Negative)',
            structure: 'S + cannot / can’t + V (infinitive)',
            examples: [{ en: `He can't swim.`, vi: 'Anh ấy không thể bơi.' }],
          },
          {
            title: 'c. Thể nghi vấn (Question)',
            structure: 'Can + S + V (infinitive)?',
            examples: [{ en: 'Can you speak English?', vi: 'Bạn có thể nói tiếng Anh không?' }],
          },
        ],
      },
      {
        title: '“Might” for Possibility',
        description: 'Chúng ta sử dụng "might" khi chúng ta không biết chắc chắn điều gì đó có đúng hay không.',
        structure: 'S + might + V (infinitive)',
        examples: [
          { en: 'We might see a bear in the national park.', vi: 'Chúng ta có thể nhìn thấy con gấu trong công viên quốc gia.' },
        ],
      },
    ],
    exercises: [
        { type: 'multiple-choice', question: 'My dog is the ______ of all the dogs in the park.', options: ['fast', 'faster', 'fastest'], answer: 'fastest' },
        { type: 'multiple-choice', question: 'This is the ______ book I have ever read.', options: ['interesting', 'more interesting', 'most interesting'], answer: 'most interesting' },
        { type: 'multiple-choice', question: 'Who is the ______ singer in the world?', options: ['good', 'better', 'best'], answer: 'best' },
        { type: 'multiple-choice', question: 'That was the ______ movie I\'ve ever seen.', options: ['bad', 'worse', 'worst'], answer: 'worst' },
        { type: 'multiple-choice', question: 'She ______ three languages fluently.', options: ['can speaks', 'can speak', 'to speak'], answer: 'can speak' },
        { type: 'multiple-choice', question: 'A fish ______ fly, but it ______ swim.', options: ['can/can\'t', 'can\'t/can', 'can\'t/can\'t'], answer: 'can\'t/can' },
        { type: 'multiple-choice', question: '______ you help me with my homework?', options: ['Can', 'Do', 'Are'], answer: 'Can' },
        { type: 'multiple-choice', question: 'I\'m not sure, but it ______ rain later.', options: ['can', 'might', 'is'], answer: 'might' },
        { type: 'multiple-choice', question: 'This is the ______ building in the city.', options: ['tall', 'taller', 'tallest'], answer: 'tallest' },
        { type: 'multiple-choice', question: 'He ______ be at the library, but I\'m not certain.', options: ['can', 'might', 'will'], answer: 'might' },
    ]
  },
  {
    id: 'unit4',
    title: 'Unit 4: Learning World',
    topics: [
      {
        title: 'Present Continuous',
        description: 'Thì hiện tại tiếp diễn nói về những sự việc đang xảy ra ở thời điểm nói.',
        subTopics: [
          { title: 'Affirmative', structure: 'S + am/is/are + V-ing', examples: [{ en: `I'm watching the birds.`, vi: 'Tôi đang ngắm những chú chim.' }] },
          { title: 'Negative', structure: 'S + am/is/are + not + V-ing', examples: [{ en: `They aren't studying.`, vi: 'Họ không đang học.' }] },
          { title: 'Question', structure: 'Am/Is/Are + S + V-ing?', examples: [{ en: 'Are you listening?', vi: 'Bạn có đang lắng nghe không?' }] },
        ],
        spellingRules: [
            { rule: 'Phần lớn các động từ chỉ cần thêm “ing”.', example: 'eat -> eating' },
            { rule: 'Các động từ kết thúc với “e” thì bỏ “e” thêm ‘ing”.', example: 'move -> moving' },
            { rule: 'Các động từ kết thúc với nguyên âm + phụ âm thì gấp đôi phụ âm rồi thêm “ing”.', example: 'plan -> planning' },
        ]
      },
      {
        title: 'Present Continuous vs. Present Simple',
        description: 'So sánh cách dùng và cấu trúc của thì hiện tại đơn và hiện tại tiếp diễn.',
        table: {
            headers: ['', 'Hiện tại đơn (Present Simple)', 'Hiện tại tiếp diễn (Present Continuous)'],
            rows: [
                { header: 'Cách dùng', items: ['Diễn tả một thói quen, một hành động xảy ra thường xuyên lặp đi lặp lại ở hiện tại.', 'Diễn tả một hành động đang xảy ra tại thời điểm nói.'] },
                { header: 'Khẳng định (+)', items: ['S + V(s/es)', 'S + am/is/are + V-ing'] },
                { header: 'Phủ định (-)', items: ['S + do/does not + V-inf', 'S + am/is/are + not + V-ing'] },
                { header: 'Nghi vấn (?)', items: ['Do/Does + S + V-inf?', 'Am/Is/Are + S + V-ing?'] },
            ]
        }
      }
    ],
    exercises: [
        { type: 'multiple-choice', question: 'Look! The children ______ in the garden.', options: ['play', 'are playing', 'plays'], answer: 'are playing' },
        { type: 'multiple-choice', question: 'I ______ TV right now, I\'m studying.', options: ['am not watching', 'don\'t watch', 'not watch'], answer: 'am not watching' },
        { type: 'multiple-choice', question: 'What ______ you ______?', options: ['are/doing', 'is/doing', 'do/do'], answer: 'are/doing' },
        { type: 'multiple-choice', question: 'She usually ______ to school.', options: ['walk', 'walks', 'is walking'], answer: 'walks' },
        { type: 'multiple-choice', question: 'We ______ to the cinema every weekend.', options: ['are going', 'go', 'goes'], answer: 'go' },
        { type: 'multiple-choice', question: 'Be quiet! The baby ______. ', options: ['sleeps', 'is sleeping', 'sleep'], answer: 'is sleeping' },
        { type: 'multiple-choice', question: 'He is ______ very fast.', options: ['run', 'running', 'runing'], answer: 'running' },
        { type: 'multiple-choice', question: 'They are ______ a letter.', options: ['write', 'writing', 'writeing'], answer: 'writing' },
        { type: 'multiple-choice', question: 'The sun ______ in the east.', options: ['rises', 'is rising', 'rise'], answer: 'rises' },
        { type: 'multiple-choice', question: 'I ______ my teeth twice a day.', options: ['am brushing', 'brush', 'brushes'], answer: 'brush' },
    ]
  },
  {
    id: 'unit5',
    title: 'Unit 5: Food and Health',
    topics: [
        {
            title: 'Countable and Uncountable Nouns',
            description: 'Phân biệt danh từ đếm được và không đếm được.',
            subTopics: [
                { title: 'a. Danh từ đếm được (Countable Nouns)', description: 'Là những danh từ chỉ sự vật tồn tại độc lập, có thể đếm được và có dạng số ít/số nhiều.', examples: [{ en: 'an apple, two bananas, three eggs', vi: 'một quả táo, hai quả chuối, ba quả trứng'}] },
                { title: 'b. Danh từ không đếm được (Uncountable Nouns)', description: 'Là những danh từ chỉ sự vật, hiện tượng không thể đếm trực tiếp bằng số và thường không có dạng số nhiều.', examples: [{ en: 'water, milk, rice, sugar', vi: 'nước, sữa, gạo, đường'}] },
            ]
        },
        {
            title: 'Quantifiers: Some, Any, Much, Many, A lot of',
            description: 'Các từ chỉ số lượng dùng với danh từ đếm được và không đếm được.',
            subTopics: [
                { title: 'a. Some', description: 'Dùng trong câu khẳng định, lời mời, đề nghị với cả danh từ đếm được và không đếm được.', examples: [{en: 'I need some milk in my coffee.', vi: 'Tôi cần một ít sữa cho cafe.'}] },
                { title: 'b. Any', description: 'Dùng trong câu phủ định và nghi vấn với cả danh từ đếm được và không đếm được.', examples: [{en: 'Do you have any coffee?', vi: 'Anh còn chút cafe nào không?'}] },
                { title: 'c. Much', description: 'Dùng với danh từ không đếm được, thường trong câu phủ định và nghi vấn.', examples: [{en: 'How much milk do you want?', vi: 'Bạn cần bao nhiêu sữa?'}] },
                { title: 'd. Many', description: 'Dùng với danh từ đếm được số nhiều.', examples: [{en: 'There are many books in the library.', vi: 'Có nhiều sách trong thư viện.'}] },
                { title: 'e. A lot of', description: 'Dùng với cả danh từ đếm được và không đếm được, thường trong câu khẳng định.', examples: [{en: 'A lot of people like football.', vi: 'Nhiều người thích bóng đá.'}] },
            ]
        },
        {
            title: 'Should / Shouldn’t',
            description: 'Dùng để đưa ra lời khuyên hoặc ý kiến.',
            structure: ['S + should + V (infinitive)', 'S + shouldn’t + V (infinitive)'],
            examples: [{en: `You shouldn't drink fizzy drinks.`, vi: 'Bạn không nên uống đồ uống có ga.'}, {en: 'You should eat more vegetables.', vi: 'Bạn nên ăn nhiều rau hơn.'}]
        }
    ],
    exercises: [
        { type: 'multiple-choice', question: 'I need to buy some ______. ', options: ['rice', 'rices', 'a rice'], answer: 'rice' },
        { type: 'multiple-choice', question: 'Is there ______ milk in the fridge?', options: ['some', 'any', 'a'], answer: 'any' },
        { type: 'multiple-choice', question: 'We have ______ apples, but we don\'t have ______ bananas.', options: ['some/any', 'any/some', 'some/some'], answer: 'some/any' },
        { type: 'multiple-choice', question: 'How ______ money do you have?', options: ['much', 'many', 'a lot'], answer: 'much' },
        { type: 'multiple-choice', question: 'How ______ students are in your class?', options: ['much', 'many', 'a'], answer: 'many' },
        { type: 'multiple-choice', question: 'There are ______ people at the party.', options: ['a lot of', 'much', 'any'], answer: 'a lot of' },
        { type: 'multiple-choice', question: 'You ______ eat more fruit and vegetables.', options: ['should', 'shouldn\'t', 'can\'t'], answer: 'should' },
        { type: 'multiple-choice', question: 'He ______ play video games all day. It\'s not healthy.', options: ['should', 'shouldn\'t', 'must'], answer: 'shouldn\'t' },
        { type: 'multiple-choice', question: 'You look tired. You ______ go to bed.', options: ['should', 'shouldn\'t', 'can'], answer: 'should' },
        { type: 'multiple-choice', question: 'I don\'t have ______ time to finish this.', options: ['many', 'much', 'some'], answer: 'much' },
    ]
  },
  {
    id: 'unit6',
    title: 'Unit 6: Sports',
    topics: [
      {
        title: 'There was / There were',
        description: 'Dùng để nói về sự tồn tại của một sự vật, sự việc trong quá khứ.',
        subTopics: [
            { title: 'There was / There wasn’t', description: 'Sử dụng với danh từ số ít.', examples: [{en: 'There was an exciting player in the volleyball team.', vi: 'Có một cầu thủ thú vị trong đội bóng chuyền.'}]},
            { title: 'There were / There weren’t', description: 'Sử dụng với danh từ số nhiều.', examples: [{en: `There weren't any messages.`, vi: 'Không có bất kỳ tin nhắn nào.'}]},
        ]
      },
      {
        title: 'Past Simple: Affirmative',
        description: 'Thì quá khứ đơn diễn tả hành động đã xảy ra và kết thúc trong quá khứ.',
        structure: 'S + V-ed / V (bất quy tắc)',
        examples: [{en: 'I competed in the Olympics.', vi: 'Tôi đã thi đấu ở Thế vận hội.'}, {en: 'She went to the cinema yesterday.', vi: 'Cô ấy đã đi xem phim ngày hôm qua.'}],
        spellingRules: [
            { rule: 'Động từ thông thường: thêm "-ed".', example: 'watch -> watched' },
            { rule: 'Động từ tận cùng là "e": chỉ thêm "d".', example: 'type -> typed' },
            { rule: 'Động từ 1 âm tiết, tận cùng là nguyên âm + phụ âm: nhân đôi phụ âm cuối rồi thêm "ed".', example: 'stop -> stopped' },
            { rule: 'Trước "y" là nguyên âm: thêm "ed".', example: 'play -> played' },
            { rule: 'Trước "y" là phụ âm: đổi "y" thành "i" rồi thêm "ed".', example: 'cry -> cried' },
        ]
      }
    ],
    exercises: [
        { type: 'multiple-choice', question: '______ a great movie on TV last night.', options: ['There was', 'There were', 'It has'], answer: 'There was' },
        { type: 'multiple-choice', question: '______ many people at the concert.', options: ['There was', 'There were', 'They are'], answer: 'There were' },
        { type: 'multiple-choice', question: '______ any sugar in my coffee.', options: ['There wasn\'t', 'There weren\'t', 'There isn\'t'], answer: 'There wasn\'t' },
        { type: 'multiple-choice', question: '______ any good songs on the radio.', options: ['There wasn\'t', 'There weren\'t', 'There isn\'t'], answer: 'There weren\'t' },
        { type: 'multiple-choice', question: 'I ______ a football match yesterday.', options: ['watch', 'watched', 'am watching'], answer: 'watched' },
        { type: 'multiple-choice', question: 'She ______ to Paris last year.', options: ['go', 'went', 'goed'], answer: 'went' },
        { type: 'multiple-choice', question: 'We ______ hard for the exam last night.', options: ['study', 'studied', 'studyd'], answer: 'studied' },
        { type: 'multiple-choice', question: 'They ______ at the red light.', options: ['stop', 'stopped', 'stoped'], answer: 'stopped' },
        { type: 'multiple-choice', question: 'My brother ______ a new car last week.', options: ['buy', 'buys', 'bought'], answer: 'bought' },
        { type: 'multiple-choice', question: 'We ______ the game, but we had fun.', options: ['not win', 'didn\'t won', 'didn\'t win'], answer: 'didn\'t win' },
    ]
  },
  {
    id: 'unit7',
    title: 'Unit 7: Growing Up',
    topics: [
      {
        title: 'Past Simple: Full Form',
        description: 'Thì quá khứ đơn (Past simple tense) dùng để diễn tả một hành động, sự việc diễn ra và kết thúc trong quá khứ.',
        table: {
            headers: ['', 'Động từ “be”', 'Động từ thường'],
            rows: [
                { header: 'Khẳng định (+)', items: ['S + was/were + ...', 'S + V2/Ved + ...'] },
                { header: 'Phủ định (-)', items: [`S + wasn't/weren't + ...`, 'S + did not + V (nguyên mẫu)'] },
                { header: 'Câu hỏi Yes/No', items: ['Was/Were + S + ...?', 'Did + S + V (nguyên mẫu)?'] },
                { header: 'Câu hỏi WH-', items: ['WH-word + was/were + S + ...?', 'WH-word + did + S + V (nguyên mẫu)?'] },
            ]
        },
        examples: [
            { en: 'I was at my uncle’s house yesterday.', vi: 'Tôi đã ở nhà bác tôi chiều hôm qua.'},
            { en: 'We visited Australia last summer.', vi: 'Chúng tôi du lịch nước Úc mùa hè trước.'},
            { en: `He wasn't at home last Monday.`, vi: 'Anh ấy đã không ở nhà thứ Hai trước.'},
            { en: `She didn't show me how to open the computer.`, vi: 'Cô ấy đã không cho tôi thấy cách mở máy tính.'},
            { en: 'Why were you sad?', vi: 'Tại sao bạn buồn?'},
            { en: 'What did you do last Sunday?', vi: 'Bạn đã làm gì Chủ nhật trước?'},
        ]
      },
    ],
    exercises: [
        { type: 'multiple-choice', question: 'I ______ tired this morning.', options: ['am', 'were', 'was'], answer: 'was' },
        { type: 'multiple-choice', question: 'They ______ happy with the result.', options: ['was', 'were', 'be'], answer: 'were' },
        { type: 'multiple-choice', question: 'She ______ at school yesterday.', options: ['isn\'t', 'weren\'t', 'wasn\'t'], answer: 'wasn\'t' },
        { type: 'multiple-choice', question: 'He ______ his homework last night.', options: ['not do', 'didn\'t', 'didn\'t do'], answer: 'didn\'t do' },
        { type: 'multiple-choice', question: '______ you ______ the movie last night?', options: ['Did/see', 'Do/see', 'Were/see'], answer: 'Did/see' },
        { type: 'multiple-choice', question: '______ she at the party?', options: ['Did', 'Was', 'Were'], answer: 'Was' },
        { type: 'multiple-choice', question: 'I ______ breakfast at 7 am yesterday.', options: ['eat', 'ate', 'eaten'], answer: 'ate' },
        { type: 'multiple-choice', question: 'They ______ a great time on holiday.', options: ['have', 'has', 'had'], answer: 'had' },
        { type: 'multiple-choice', question: 'What ______ you ______ last weekend?', options: ['did/do', 'do/did', 'were/do'], answer: 'did/do' },
        { type: 'multiple-choice', question: 'We ______ the museum on our trip.', options: ['didn\'t visited', 'didn\'t visit', 'not visit'], answer: 'didn\'t visit' },
    ]
  }
];
