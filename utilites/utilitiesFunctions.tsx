export function getSystemTheme(): "light" | "dark" {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return "dark";
    } else {
        return "light";
    }
}

export function getIndianMinutes():
    | "00"
    | "01"
    | "02"
    | "03"
    | "04"
    | "05"
    | "06"
    | "07"
    | "08"
    | "09"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36"
    | "37"
    | "38"
    | "39"
    | "40"
    | "41"
    | "42"
    | "43"
    | "44"
    | "45"
    | "46"
    | "47"
    | "48"
    | "49"
    | "50"
    | "51"
    | "52"
    | "53"
    | "54"
    | "55"
    | "56"
    | "57"
    | "58"
    | "59" {
    const now = new Date();
    const istOffset = 330 * 60 * 1000;
    const istDate = new Date(now.getTime() + istOffset);

    const minutes = istDate.getUTCMinutes(); // get IST minutes
    return minutes.toString().padStart(2, "0") as any;
}

export function getIndianHour():
    | "00"
    | "01"
    | "02"
    | "03"
    | "04"
    | "05"
    | "06"
    | "07"
    | "08"
    | "09"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23" {
    const now = new Date();

    // IST = UTC + 5 hours 30 minutes
    const istOffset = 330 * 60 * 1000; // in ms
    const istDate = new Date(now.getTime() + istOffset);

    const hour = istDate.getUTCHours(); // getUTCHours gives IST after offset

    return hour.toString().padStart(2, "0") as any;
}
