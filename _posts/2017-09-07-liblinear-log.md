---
layout: post
category : lessons
tags : [liblinear, logistic regression, 机器学习]
---
{% include JB/setup %}

liblinear 是个用于大规模线性分类的代码库.在流行的机器学习工具包scikit-learn中,LR和SVM线性分类器就使用这个库.因而可以预计会有强大的性能.
它支持L2-正则化的logistic regression, L2-loss 和L1-loss 线性支持向量机.
其中

**L1-SVM和L2-SVM使用的坐标下降法(coordinate descent method)**
,**L2-LR 实现了置信区域牛顿法(trust region Newton method)**
