function normalize_weights(weights) {
    if (weights.length > 1) {
        var result = weights.slice(0);
        var minimum = Math.min.apply(Math, weights);
        var maximum = Math.max.apply(Math, weights);
        for (var idx=0; idx < weights.length; ++idx) {
            result[idx] = (weights[idx] - minimum ) / (maximum-minimum);
        }
        return result;
    } else {
        return weights;
    }
}
function softmax(weights) {
    if (weights && weights.length > 0) {
        var exped_weights = weights.slice(0);
        var sum_exp = 0;
        for (var i = 0; i < exped_weights.length; i++) {
            exped_weights[i] = Math.exp(exped_weights[i]);
            sum_exp += exped_weights[i];
        }
        for (var i = 0; i < exped_weights.length; i++) {
            exped_weights[i] /= sum_exp;
        }
        return exped_weights;
    }
    return weights;
}

function inplace_softmax(weights) {
    if (weights && weights.length > 0) {
        var sum_exp = 0;
        for (var i = 0; i < weights.length; i++) {
            weights[i] = Math.exp(weights[i]);
            sum_exp += weights[i];
        }
        for (var i = 0; i < weights.length; i++) {
            weights[i] /= sum_exp;
        }
        return weights;
    }
    return weights;
}

function color_str(r, g, b, a) {
    var rgb_str = Math.round(255*r) + ',' + Math.round(255*g) + ',' + Math.round(255*b);
    if (a) {
        return 'rgba(' + rgb_str + ',' + a + ')';
    } else {
        return 'rgb(' + rgb_str +')';
    }
}
