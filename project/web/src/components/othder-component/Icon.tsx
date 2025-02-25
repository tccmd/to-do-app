import { DragControls } from 'framer-motion';

interface Props {
  dragControls: DragControls;
}

export function ReorderIcon({ dragControls }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 39"
      width="18"
      height="18"
      onPointerDown={(event) => dragControls.start(event)}
      className='grap'
    >
      <path
        d="M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z"
        fill="#CCC"
      />
      <path
        d="M 19 0 C 21.761 0 24 2.239 24 5 C 24 7.761 21.761 10 19 10 C 16.239 10 14 7.761 14 5 C 14 2.239 16.239 0 19 0 Z"
        fill="#CCC"
      />
      <path
        d="M 33 0 C 35.761 0 38 2.239 38 5 C 38 7.761 35.761 10 33 10 C 30.239 10 28 7.761 28 5 C 28 2.239 30.239 0 33 0 Z"
        fill="#CCC"
      />
      <path
        d="M 33 14 C 35.761 14 38 16.239 38 19 C 38 21.761 35.761 24 33 24 C 30.239 24 28 21.761 28 19 C 28 16.239 30.239 14 33 14 Z"
        fill="#CCC"
      />
      <path
        d="M 19 14 C 21.761 14 24 16.239 24 19 C 24 21.761 21.761 24 19 24 C 16.239 24 14 21.761 14 19 C 14 16.239 16.239 14 19 14 Z"
        fill="#CCC"
      />
      <path
        d="M 5 14 C 7.761 14 10 16.239 10 19 C 10 21.761 7.761 24 5 24 C 2.239 24 0 21.761 0 19 C 0 16.239 2.239 14 5 14 Z"
        fill="#CCC"
      />
      <path
        d="M 5 28 C 7.761 28 10 30.239 10 33 C 10 35.761 7.761 38 5 38 C 2.239 38 0 35.761 0 33 C 0 30.239 2.239 28 5 28 Z"
        fill="#CCC"
      />
      <path
        d="M 19 28 C 21.761 28 24 30.239 24 33 C 24 35.761 21.761 38 19 38 C 16.239 38 14 35.761 14 33 C 14 30.239 16.239 28 19 28 Z"
        fill="#CCC"
      />
      <path
        d="M 33 28 C 35.761 28 38 30.239 38 33 C 38 35.761 35.761 38 33 38 C 30.239 38 28 35.761 28 33 C 28 30.239 30.239 28 33 28 Z"
        fill="#CCC"
      />
    </svg>
  );
}

export function FilterIcon() { 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <defs>
        <clipPath id="master_svg0_22_271">
          <rect x="0" y="0" width="14" height="14" rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_22_271)">
        <g transform="matrix(1,0,0,-1,0,26.8717041015625)">
          <g>
            <path
              d="M0.267270390625,25.06705205078125Q0.561163390625,25.66855205078125,1.229100390625,25.69595205078125L12.771100390625,25.69595205078125Q13.439000390625,25.66855205078125,13.732900390625,25.06705205078125Q14.000100390625,24.438152050781248,13.599300390625,23.91855205078125L8.710020390625,17.79358205078125L8.710020390625,14.32092605078125Q8.683300390625,13.80139505078125,8.229100390625,13.52795725078125Q7.774900390625,13.30920705078125,7.347420390625,13.60998805078125L5.637500390625,14.92249205078125Q5.290170390625,15.19592205078125,5.290170390625,15.633422050781249L5.290170390625,17.79358205078125L0.400858390625,23.91855205078125Q0.00009539062499999695,24.438152050781248,0.267270390625,25.06705205078125Z"
              fill="#FFFFFF"
              fillOpacity="1"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function AddIcon() { 
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      version="1.1"
      width="15.75"
      height="28"
      viewBox="0 0 15.75 28"
    >
      <defs>
        <pattern x="0" y="0" width="15.75" height="28" patternUnits="userSpaceOnUse" id="master_svg0_22_0191">
          <image
            x="0.04166666666666696"
            y="0"
            width="15.666666666666666"
            height="28"
          />
        </pattern>
      </defs>
      <g>
        <rect
          x="0"
          y="0"
          width="15.75"
          height="28"
          rx="0"
          fill="#000000"
          fill-opacity="0"
        />
        <rect
          x="0"
          y="0"
          width="15.75"
          height="28"
          rx="0"
          fill="url(#master_svg0_22_0191)"
          fill-opacity="1"
        />
      </g>
    </svg>
  );
}