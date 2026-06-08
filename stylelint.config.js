export default {
  extends: [
    'stylelint-config-standard', // stylelint标准配置
    'stylelint-config-standard-scss', // 配置 stylelint scss 插件
    'stylelint-config-recess-order' // 对CSS声明进行排序
  ],
  plugins: ['stylelint-order', 'stylelint-scss'], // CSS 属性顺序规则插件
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.json', '**/*.md', '**/*.yaml', 'dist/*', 'src/uni_modules/**', 'node_modules/**'],
  rules: {
    // 禁止空代码
    'no-empty-source': null,
    // 禁止在覆盖高特异性选择器之后出现低特异性选择器
    'no-descending-specificity': null,
    // 不允许未知单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 禁止空注释
    'comment-no-empty': true,
    // @import 规则必须始终使用字符串表示法。
    'import-notation': 'string',
    // 未知的 @ 规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'plugin',
          'apply',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
          'content',
          'use'
        ]
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    // 允许 global 、export 、v-deep等伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep']
      }
    ],
    // 处理
    'comment-empty-line-before': 'never',
    // 处理小程序page标签不认识的问题
    'selector-type-no-unknown': [true, { ignoreTypes: ['page', 'radio', 'checkbox', 'scroll-view'] }]
  },
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
      rules: {
        // 禁止未知的伪类选择器
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
        // 禁止未知的伪元素选择器
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] }]
      }
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss'],
      rules: {
        'scss/dollar-variable-pattern': null
      }
    }
  ]
}
