/**
 * Global style constants for maintaining consistent visual hierarchy
 * across the Held Thread website.
 */

// Button style configurations
export const BUTTON_STYLES = {
    primary: {
        $padding: "10px 20px",
        $borderRadius: "30px",
        $margin: "10px",
        $backgroundColor: "#87b5ca",
        $color: "white",
        $hoverColor: "#9dbfd1",
        $hoverTextColor: "white",
        width: "auto"
    },
    secondary: {
        $backgroundColor: "#fff",
        $color: "#87b5ca",
        $hoverColor: "#f4fbff",
        $hoverTextColor: "#87b5ca",
    },
    shared: {
        width: "auto",
        $padding: "10px 20px",
        $borderRadius: "30px",
        $margin: "10px",
    }
} as const;