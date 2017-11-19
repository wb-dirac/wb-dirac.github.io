---
layout: post
title: 无限制优化基础
category : numerical optimization
tags : [优化, 线搜索法]
---
{% include JB/setup %}

## 第二章,无限制优化基础
两种方法迭代方法.
1,线搜索法, 在迭代点 $$ x_k $$ 处指定一个放向p_k, 找的最佳搜索长度.方向 可以是最降速的梯度或者牛顿方法确定的 $$ -df/d^2f $$
第k步目标函数的值 $$ f(x_k+\alpha_kp_k) $$
2,置信区域法:<!-- excerpt -->

## 第三章 线搜索
### Wolfe条件:

对于一个迭代 $ x_k=x_{k-1} + \alpha_kp_k $ 规定了给定一个下降的方向$p_k$, 迭代步长 $alpha$ 的选择问题

1. $ f(x_k+\alpha p_k) <= l(a)=f(x_k) + c_1 \alpha \nabla f_k p_k $

2. $ \nabla f(x_k+\alpha p_k)^Tp_k >= c_2 \nabla f_k^T p_k $

### 全局收敛性
如何保证一个迭代会收敛到最优值?

下面是一个较弱的定理(Zoutendijk):考虑一个迭代$ x_k=x_{k-1} + \alpha_kp_k $,其中 $ p_k $是一个下降方向, 和梯度夹角为$\theta_k$, $\alpha$ 满足Wolfe条件, 从任意初始点开始,集合$\{x:f(x)<f(x_0)\}$ 中梯度$\nabla f$ 满足 Lipschitz 连续性, 那么最后会有
$$\sum_{k\geq 0}cos^2\theta_k\|\nabla f_k\|^2<\infty$$ 

如果能让下降方向和梯度总是远离90°一定距离,即 $cos\theta_k \geq \delta>0$, 那么总是可以保证$$\lim_{k \to \infty}\|\nabla f_k\|=0$$
### 收敛率
全局下降可以让我们从任意初始点开始迭代,但是迭代速度不能保证,比如最速下降能保证全局性却牺牲了收敛速度.而牛顿法是二阶收敛,但很依赖初始点的选择,有时候甚至不能收敛到目标.一些快速收敛法会打破全局收敛的要求,比如每步都要求一个下降方向.
