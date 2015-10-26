var dest = "./build";
var src = '.';

module.exports = {
  sass: {
    src: src + "/main.scss",
    dest: dest + '',
    settings: {
      includePaths: [require('node-bourbon').includePaths],
      indentedSyntax: false//, // Enable/Disable .sass syntax!
      // imagePath: 'images' // Used by the image-url helper
    }
  }//,
  // markup: {
  //   src: "./theme/**/*.{php,html}",
  // },
  // images: {
  //   src: src + "/images/**",
  //   dest: dest + "/img"
  // },
};
