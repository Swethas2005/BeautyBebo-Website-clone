import {Box} from '@chakra-ui/react';

function MyComponent() {
  return (
    <div>
      {/* Button that navigates to the Fragrance link */}
      <a href="https://www.beautybebo.com/fragrance.html" target="_blank" rel="noopener noreferrer">
        <Box display={"flex"} gap={"5px"}>
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36" fill='#dd0285'><path d="M770-580q-29 0-49.5-21T700-651q0-29 20.5-49.5T770-721q29 0 49.5 20.5T840-651q0 29-20.5 50T770-580Zm-580 0q-29 0-49.5-21T120-651q0-29 20.5-49.5T190-721q29 0 49.5 20.5T260-651q0 29-20.5 50T190-580Zm142-60q10-35 4.5-61.5T310-753q-32-38-42-77.5t1-89.5h61q-7 43-1.5 72.5T355-792q32 38 41 74t-2 78h-62Zm120 0q10-35 4.5-61.5T430-753q-32-38-42-77.5t1-89.5h61q-8 45-2 73.5t27 54.5q32 38 41 74t-2 78h-62Zm120 0q10-35 4.5-61.5T550-753q-32-38-42-77.5t1-89.5h61q-8 45-2 73.5t27 54.5q32 38 41 74t-2 78h-62ZM160-80q-33 0-56.5-23.5T80-160v-280h40v-25q0-31 21.5-53t52.5-22q16 0 30.5 7.5T250-514l45 51q6 6 12.5 12t13.5 11h318q8-5 14-11l12-12 45-51q11-11 25.5-18.5T766-540q31 0 52.5 22t21.5 53v25h40v280q0 33-23.5 56.5T800-80H160Zm0-200h640v-80H160v80Zm0 120h640v-40H160v40Zm320-120Zm0 80Zm0 0v-80 80Z"/></svg>
        <button style={{fontSize:"15px",fontFamily:"sans-serif",margin:"1px",padding:"12px,10px",marginTop:"5px",color:"grey",fontWeight:"lighter"}}>Fragrance</button>
        </Box>
      </a>
    </div>
  );
}

export default MyComponent;
