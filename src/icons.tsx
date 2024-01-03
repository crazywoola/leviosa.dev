import { Hono } from "hono";

const icons = new Hono();

const GithubIcon = () => {
  return (
    <span>
      <a href="https://github.com/crazywoola" target="_blank">
        <svg height="20" width="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1"
          data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
          </path>
        </svg>
      </a>
    </span>
  )
}

const XIcon = () => {
  return <span>
    <a href="https://twitter.com/crazyphage" target="_blank">
      <svg version="1.1" id="svg5" xmlns: svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
        xmlns: xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1668.56 1221.19"
        style="enable-background:new 0 0 1668.56 1221.19;" xml: space="preserve" width="20" height="20">
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
     h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" />
        </g>
      </svg>
    </a>
  </span>
}

const LittleRedBookIcon = () => {
  return <span>
    <a href="https://www.xiaohongshu.com/user/profile/55b646aa3397db5ad6136b9c" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
        <title>Xiaohongshu</title>
        <path
          d="M289.44,256H477.67c17.93,0,33.86,15.57,34.33,33.48V477.72A35.09,35.09,0,0,1,477.66,512H289.5A35.14,35.14,0,0,1,256,477.64V289.56C256.43,271.93,271.81,256.5,289.44,256Zm16.73,91.44c-.13,19.87-.06,39.75-.16,59.63a2.1,2.1,0,0,1-2.13,2.6c-2.39.14-4.79.06-7.19.08,1.61,4,3.35,7.86,5.15,11.73,4.52-.15,9.68.79,13.54-2.17,3.47-2.58,4.58-7.17,4.51-11.3,0-20.19,0-40.39-.09-60.58C315.26,347.41,310.71,347.4,306.17,347.44Zm56.08-.9q-5.08,11.67-10.36,23.24c-1,2.31-2.21,5.37-.11,7.46,2.69,2.44,6.64,1.5,9.94,1.72-2.29,5.78-5.3,11.27-7.23,17.19-1.07,2.92,1.6,5.89,4.52,5.92,5.29.36,10.6,0,15.9.14,1.73-3.87,3.47-7.73,5.17-11.62-3.09,0-6.21.22-9.25-.39,3.29-8.26,7.19-16.25,10.68-24.41-4.27-.5-9.1.89-13-.77,1.9-6.4,5.36-12.27,7.8-18.5C371.61,346.5,366.93,346.47,362.25,346.54Zm72.75.05,0,5.21c-3.06,0-6.12,0-9.18,0q0,7,0,13.93c3.07,0,6.13,0,9.19.06q.12,6,0,12.08c-4.6.09-9.21,0-13.81.07-.06,4.64-.05,9.27,0,13.9,4.61.05,9.23,0,13.84,0,0,9.86,0,19.73,0,29.59,4.62,0,9.23,0,13.85,0q0-14.79,0-29.57c6.74,0,13.47-.1,20.21,0,2.37-.2,5.08,1.46,5,4.07a110.67,110.67,0,0,1,0,11.08,2.26,2.26,0,0,1-2.12,2.39c-3.85.28-7.71,0-11.57.13,1.7,4,3.35,8,5.28,11.95,6.35-.33,14.11,1.27,18.95-4,4.6-4.26,3.22-11,3.41-16.56-.29-5.85,1.14-12.46-2.49-17.58-3.09-4.34-8.66-5.52-13.68-5.61-.3-7,1.37-15.19-3.78-20.88-4.8-5.38-12.53-5.4-19.17-5.14l0-5.2C444.23,346.56,439.61,346.57,435,346.59Zm-49.42,5.22q0,7,0,13.92c2.9,0,5.79,0,8.69,0,0,13.91,0,27.83,0,41.74-4.15.07-8.31,0-12.46.05-2.15,4.62-4.25,9.26-6.34,13.9,15.48.06,31,0,46.44,0q0-6.94,0-13.9c-4.45,0-8.91,0-13.36-.05q0-20.88,0-41.77c2.91,0,5.81,0,8.72,0,0-4.64,0-9.29,0-13.93C406.73,351.79,396.16,351.77,385.58,351.81Zm91.35,1.28c-3.88,2.94-2.61,8.32-2.78,12.51,2.59,0,5.19.14,7.78-.09,4.16-.38,7.29-5.23,5.62-9.15C486.24,352.06,480.43,350.19,476.93,353.09ZM283,365.72c-.7,9.12-1.41,18.23-2.07,27.35a22.12,22.12,0,0,1-1.32,6.06c2.34,5.35,4.68,10.7,7.18,16,5.6-7.49,7.68-16.93,8.26-26.1.49-7.8,1.36-15.59,1.64-23.4C292.1,365.79,287.54,365.68,283,365.72Zm46.13,0q1,12.69,2,25.37c.73,8.48,2.92,17.12,8.1,24,2.47-5.29,4.83-10.63,7.17-16A21.67,21.67,0,0,1,345,393c-.66-9.09-1.38-18.18-2.08-27.27Q336,365.69,329.1,365.72Zm17.16,54.69c7.08,2.09,14.58.66,21.85,1.05,2.14-4.63,4.27-9.27,6.35-13.93-7.27-.28-14.67.76-21.8-1.07Q349.42,413.41,346.26,420.41Z"
          transform="translate(-256 -256)" style="fill:#ff2741" />
        <path
          d="M448.77,365.77c3,.43,7-1.22,9.29,1.2.38,3.65.1,7.32.14,11-3.11,0-6.23,0-9.34,0Q448.77,371.87,448.77,365.77Z"
          transform="translate(-256 -256)" style="fill:#ff2741" />
        <path
          d="M306.17,347.44c4.54,0,9.09,0,13.63,0,.13,20.19.08,40.39.09,60.58.07,4.13-1,8.72-4.51,11.3-3.86,3-9,2-13.54,2.17-1.8-3.87-3.54-7.77-5.15-11.73,2.4,0,4.8.06,7.19-.08a2.1,2.1,0,0,0,2.13-2.6C306.11,387.19,306,367.31,306.17,347.44Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M362.25,346.54c4.68-.07,9.36,0,14,0-2.44,6.23-5.9,12.1-7.8,18.5,3.92,1.66,8.75.27,13,.77-3.49,8.16-7.39,16.15-10.68,24.41,3,.61,6.16.39,9.25.39-1.7,3.89-3.44,7.75-5.17,11.62-5.3-.09-10.61.22-15.9-.14-2.92,0-5.59-3-4.52-5.92,1.93-5.92,4.94-11.41,7.23-17.19-3.3-.22-7.25.72-9.94-1.72-2.1-2.09-.88-5.15.11-7.46Q357.14,358.2,362.25,346.54Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M435,346.59c4.61,0,9.23,0,13.84,0l0,5.2c6.64-.26,14.37-.24,19.17,5.14,5.15,5.69,3.48,13.9,3.78,20.88,5,.09,10.59,1.27,13.68,5.61,3.63,5.12,2.2,11.73,2.49,17.58-.19,5.57,1.19,12.3-3.41,16.56-4.84,5.23-12.6,3.63-18.95,4-1.93-3.91-3.58-7.94-5.28-11.95,3.86-.11,7.72.15,11.57-.13a2.26,2.26,0,0,0,2.12-2.39,110.67,110.67,0,0,0,0-11.08c.07-2.61-2.64-4.27-5-4.07-6.74-.1-13.47,0-20.21,0q0,14.79,0,29.57c-4.62,0-9.23,0-13.85,0,0-9.86,0-19.73,0-29.59-4.61,0-9.23,0-13.84,0,0-4.63,0-9.26,0-13.9,4.6,0,9.21,0,13.81-.07q.13-6,0-12.08c-3.06-.05-6.12-.09-9.19-.06q0-7,0-13.93c3.06,0,6.12,0,9.18,0Zm13.77,19.18q0,6.1.09,12.2c3.11,0,6.23,0,9.34,0,0-3.66.24-7.33-.14-11C455.77,364.55,451.77,366.2,448.77,365.77Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M385.58,351.81c10.58,0,21.15,0,31.72,0,0,4.64,0,9.29,0,13.93-2.91,0-5.81,0-8.72,0q0,20.89,0,41.77c4.45.05,8.91,0,13.36.05q0,6.94,0,13.9c-15.48,0-31,0-46.44,0,2.09-4.64,4.19-9.28,6.34-13.9,4.15,0,8.31,0,12.46-.05,0-13.91,0-27.83,0-41.74-2.9,0-5.79,0-8.69,0Q385.55,358.77,385.58,351.81Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M476.93,353.09c3.5-2.9,9.31-1,10.62,3.27,1.67,3.92-1.46,8.77-5.62,9.15-2.59.23-5.19.1-7.78.09C474.32,361.41,473.05,356,476.93,353.09Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M283,365.72c4.57,0,9.13.07,13.69-.11-.28,7.81-1.15,15.6-1.64,23.4-.58,9.17-2.66,18.61-8.26,26.1-2.5-5.28-4.84-10.63-7.18-16a22.12,22.12,0,0,0,1.32-6.06C281.56,384,282.27,374.84,283,365.72Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M329.1,365.72q6.91,0,13.83,0c.7,9.09,1.42,18.18,2.08,27.27a21.67,21.67,0,0,0,1.32,6.15c-2.34,5.35-4.7,10.69-7.17,16-5.18-6.91-7.37-15.55-8.1-24S329.77,374.18,329.1,365.72Z"
          transform="translate(-256 -256)" style="fill:#fff" />
        <path
          d="M346.26,420.41q3.17-7,6.4-13.95c7.13,1.83,14.53.79,21.8,1.07-2.08,4.66-4.21,9.3-6.35,13.93C360.84,421.07,353.34,422.5,346.26,420.41Z"
          transform="translate(-256 -256)" style="fill:#fff" />
      </svg>
    </a>
  </span>
}
icons.get("/:name", (c) => {
  const name = c.req.param('name')

  switch (name) {
    case "github":
      return c.html(<GithubIcon />)
    case "x":
      return c.html(<XIcon />)
    case "little-red-book":
      return c.html(<LittleRedBookIcon />)
    default:
      return c.html(<div>404</div>)
  }
});

export default icons;