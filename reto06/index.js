function maxDistance(movements) {
    let right = 0;
    let left = 0;
    let wildcard = 0;

    for (const element of movements) {
        if (element === '>') right++;
        else if (element === '<') left++;
        else wildcard++;
    }

    if (right === left)
        return wildcard;

    return Math.max(right, left) + wildcard - Math.min(right, left)

}