function isAnagram(str1, str2) {
    let cleanStr1 = str1.toLowerCase().trim().split('').sort().join('');
    let cleanStr2 = str2.toLowerCase().trim().split('').sort().join('');

    // Compare the cleaned strings
    if (cleanStr1 === cleanStr2) {
        console.log('Is Anagram');
    } else {
        console.log('Not Anagram');
    }
}

isAnagram("listen", "silent");
