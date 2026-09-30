/** Tailwind CSS 빌드 설정 — index.html에서 사용하는 클래스만 tailwind.css로 생성한다.
 *  빌드: npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o tailwind.css --minify
 *  (배포 워크플로에서 자동으로 다시 생성된다) */
module.exports = {
  content: ['./index.html'],
  theme: { extend: {} },
  plugins: [],
};
